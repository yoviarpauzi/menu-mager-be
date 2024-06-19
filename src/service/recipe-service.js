import validate from "../validation/validation.js";
import recipeValidation from "../validation/recipe-validation.js";
import prismaClient from "../application/database.js";
import ResponseError from "../error/response-error.js";
import deleteFileHelper from "../helper/delete-file-helper.js";

const createPayload = (request) => {
  return {
    name: request.body.name,
    description: request.body.description,
    photo: "/images/" + request.file.filename,
    material: request.body.material ? JSON.parse(request.body.material) : [],
    allergy: request.body.allergy ? JSON.parse(request.body.allergy) : [],
    preferences: request.body.preferences
      ? JSON.parse(request.body.preferences)
      : [],
    instruction: JSON.parse(request.body.instruction),
  };
};

const selectData = {
  id: true,
  name: true,
  description: true,
  photo: true,
  recipe_allergy: {
    select: {
      allergy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  },
  recipe_preferences: {
    select: {
      preferences: {
        select: {
          id: true,
          name: true,
          photo: true,
        },
      },
    },
  },
  recipe_material: {
    select: {
      amount: true,
      unit: true,
      material: {
        select: {
          id: true,
          name: true,
          photo: true,
        },
      },
    },
  },
  instruction: {
    select: {
      step: true,
      description: true,
    },
  },
};

const create = async (request) => {
  const payload = createPayload(request);

  const recipe = validate(recipeValidation, payload);

  console.log(recipe);

  const countRecipe = await prismaClient.recipe.count({
    where: {
      name: recipe.name,
    },
  });

  if (countRecipe === 1) {
    await deleteFileHelper(recipe.photo);
    throw new ResponseError(409, "recipe already exists!");
  }

  return prismaClient.recipe.create({
    data: {
      name: recipe.name,
      description: recipe.description,
      photo: recipe.photo,
      recipe_material: {
        create: recipe.material.map((material) => {
          return {
            amount: material.amount,
            unit: material.unit,
            material: {
              connect: {
                name: material.name,
              },
            },
          };
        }),
      },
      recipe_allergy: {
        create: recipe.allergy.map((allergy) => {
          return {
            allergy: {
              connectOrCreate: {
                where: {
                  name: allergy.name,
                },
                create: {
                  name: allergy.name,
                },
              },
            },
          };
        }),
      },
      recipe_preferences: {
        create: recipe.preferences.map((preference) => {
          return {
            preferences: {
              connect: {
                name: preference.name,
              },
            },
          };
        }),
      },
      instruction: {
        create: recipe.instruction.map((instruction, index) => {
          return {
            step: index,
            description: instruction.description,
          };
        }),
      },
    },
    select: selectData,
  });
};

const update = async (request) => {
  const id = request.params.id;
  const payload = createPayload(request);

  const recipe = validate(recipeValidation, payload);

  const findRecipe = await prismaClient.recipe.findUnique({
    where: {
      id: id,
    },
    select: {
      photo: true,
    },
  });

  if (!findRecipe) {
    await deleteFileHelper(recipe.photo);
    throw new ResponseError(404, "recipe not found!");
  }

  const countRecipe = await prismaClient.recipe.count({
    where: {
      id: {
        not: id,
      },
      name: recipe.name,
    },
  });

  if (countRecipe === 1) {
    await deleteFileHelper(recipe.photo);
    throw new ResponseError(409, "recipe already exists!");
  } else {
    await deleteFileHelper(findRecipe.photo);
  }

  return prismaClient.recipe.update({
    where: {
      id: id,
    },
    data: {
      ...recipe,
      recipe_material: {
        deleteMany: {},
        create: recipe.material.map((material) => {
          return {
            amount: Number(material.amount),
            unit: material.unit,
            material: {
              connect: {
                name: material.name,
              },
            },
          };
        }),
      },
      recipe_allergy: {
        deleteMany: {},
        create: recipe.allergy.map((allergy) => {
          return {
            allergy: {
              connectOrCreate: {
                where: {
                  name: allergy.name,
                },
                create: {
                  name: allergy.name,
                },
              },
            },
          };
        }),
      },
      recipe_preferences: {
        deleteMany: {},
        create: recipe.preferences.map((preference) => {
          return {
            preferences: {
              connect: {
                name: preference.name,
              },
            },
          };
        }),
      },
      instruction: {
        deleteMany: {},
        create: recipe.instruction.map((instruction, index) => {
          return {
            step: index,
            description: instruction.description,
          };
        }),
      },
    },
    select: selectData,
  });
};

const remove = async (request) => {
  const id = request.params.id;

  const findRecipe = await prismaClient.recipe.findUnique({
    where: {
      id: id,
    },
    select: {
      photo: true,
    },
  });

  if (!findRecipe) {
    throw new ResponseError(404, "recipe not found!");
  } else {
    await deleteFileHelper(findRecipe.photo);
  }

  return prismaClient.recipe.delete({
    where: {
      id: id,
    },
    select: selectData,
  });
};

const getDetail = async (request) => {
  const id = request.params.id;

  const countRecipe = await prismaClient.recipe.count({
    where: {
      id: id,
    },
  });

  if (countRecipe === 0) {
    throw new ResponseError(404, "recipe not found!");
  }

  return prismaClient.recipe.findUnique({
    where: {
      id: id,
    },
    select: selectData,
  });
};

const getAll = async () => {
  return prismaClient.recipe.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      photo: true,
    },
  });
};

export default { create, update, remove, getDetail, getAll };
