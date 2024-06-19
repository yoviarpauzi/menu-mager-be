import validate from "../validation/validation.js";
import materialValidation from "../validation/material-validation.js";
import prismaClient from "../application/database.js";
import deleteFileHelper from "../helper/delete-file-helper.js";
import ResponseError from "../error/response-error.js";

const create = async (request) => {
  const payload = {
    name: request.body.name,
    photo: "/images/" + request.file.filename,
  };

  const material = validate(materialValidation, payload);

  const countMaterial = await prismaClient.material.count({
    where: {
      name: material.name,
    },
  });

  if (countMaterial === 1) {
    await deleteFileHelper(material.photo);
    throw new ResponseError(409, "material already exist!");
  }

  return prismaClient.material.create({
    data: material,
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const update = async (request) => {
  const id = request.params.id;
  const payload = {
    name: request.body.name,
    photo: "/images/" + request.file.fileName,
  };

  const material = validate(materialValidation, payload);

  const findMaterial = await prismaClient.material.findUnique({
    where: {
      id: id,
    },
    select: {
      photo: true,
    },
  });

  if (!findMaterial) {
    await deleteFileHelper(material.photo);
    throw new ResponseError(404, "material not found!");
  }

  const countMaterial = await prismaClient.material.count({
    where: {
      id: {
        not: id,
      },
      name: material.name,
    },
  });

  if (countMaterial === 1) {
    await deleteFileHelper(material.photo);
    throw new ResponseError(409, "material already exist!");
  } else {
    await deleteFileHelper(findMaterial.photo);
  }

  return prismaClient.material.update({
    where: {
      id: id,
    },
    data: material,
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const remove = async (request) => {
  const id = request.params.id;

  const findMaterial = await prismaClient.material.findUnique({
    where: {
      id: id,
    },
    select: {
      photo: true,
    },
  });

  if (!findMaterial) {
    throw new ResponseError(404, "material not found!");
  } else {
    await deleteFileHelper(findMaterial.photo);
  }

  return prismaClient.material.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const getDetail = async (request) => {
  const id = request.params.id;

  const countMaterial = await prismaClient.material.count({
    where: {
      id: id,
    },
  });

  if (countMaterial === 0) {
    throw new ResponseError(404, "material not found!");
  }

  return prismaClient.material.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      photo: true,
      recipe_material: {
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
  return prismaClient.material.findMany({
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

export default { create, update, remove, getDetail, getAll };
