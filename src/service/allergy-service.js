import validate from "../validation/validation.js";
import allergyValidation from "../validation/allergy-validation.js";
import prismaClient from "../application/database.js";
import ResponseError from "../error/response-error.js";

const create = async (request) => {
  const allergy = validate(allergyValidation, request.body);

  const countAllergy = await prismaClient.allergy.count({
    where: {
      name: allergy.name,
    },
  });

  if (countAllergy === 1) {
    throw new ResponseError(409, "allergy already exists!");
  }

  return prismaClient.allergy.create({
    data: allergy,
    select: {
      id: true,
      name: true,
    },
  });
};

const update = async (request) => {
  const id = Number(request.params.id);

  const allergy = validate(allergyValidation, request.body);

  const countAllergy = await prismaClient.allergy.count({
    where: {
      id: id,
    },
  });

  if (countAllergy === 0) {
    throw new ResponseError(404, "allergy not found!");
  }

  const countSameAllergy = await prismaClient.allergy.count({
    where: {
      id: {
        not: id,
      },
      name: allergy.name,
    },
  });

  if (countSameAllergy) {
    throw new ResponseError(409, "allergy already exist!");
  }

  return prismaClient.allergy.update({
    where: {
      id: id,
    },
    data: allergy,
    select: {
      id: true,
      name: true,
    },
  });
};

const remove = async (request) => {
  const id = Number(request.params.id);

  const countAllergy = await prismaClient.allergy.count({
    where: {
      id: id,
    },
  });

  if (countAllergy === 0) {
    throw new ResponseError(404, "allergy not found!");
  }

  return prismaClient.allergy.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
    },
  });
};

const getDetail = async (request) => {
  const id = Number(request.params.id);

  const countAllergy = await prismaClient.allergy.count({
    where: {
      id: id,
    },
  });

  if (countAllergy === 0) {
    throw new ResponseError(404, "allergy not found!");
  }

  return prismaClient.allergy.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      recipe_allergy: {
        select: {
          recipe: {
            select: {
              id: true,
              name: true,
              description: true,
              photo: true,
            },
          },
        },
      },
    },
  });
};

const getAll = async () => {
  return prismaClient.allergy.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export default { create, update, remove, getDetail, getAll };
