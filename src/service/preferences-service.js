import validate from "../validation/validation.js";
import preferencesValidation from "../validation/preferences-validation.js";
import prismaClient from "../application/database.js";
import deleteFileHelper from "../helper/delete-file-helper.js";
import ResponseError from "../error/response-error.js";

const create = async (request) => {
  const payload = {
    name: request.body.name,
    photo: "/images/" + request.file.filename,
  };

  const preferences = validate(preferencesValidation, payload);

  const countPreferences = await prismaClient.preferences.count({
    where: {
      name: preferences.name,
    },
  });

  if (countPreferences === 1) {
    await deleteFileHelper(preferences.photo);
    throw new ResponseError(409, "preferences already exists!");
  }

  return prismaClient.preferences.create({
    data: preferences,
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const update = async (request) => {
  const id = Number(request.params.id);
  const payload = {
    name: request.body.name,
    photo: "/images/" + request.file.filename,
  };

  const preferences = validate(preferencesValidation, payload);

  const findPreferences = await prismaClient.preferences.findUnique({
    where: {
      id: id,
    },
    select: {
      photo: true,
    },
  });

  if (!findPreferences) {
    await deleteFileHelper(preferences.photo);
    throw new ResponseError(404, "preferences not found!");
  }

  const countPreferences = await prismaClient.preferences.count({
    where: {
      id: {
        not: id,
      },
      name: preferences.name,
    },
  });

  if (countPreferences === 1) {
    await deleteFileHelper(preferences.photo);
    throw new ResponseError(409, "preferences already exist!");
  } else {
    await deleteFileHelper(findPreferences.photo);
  }

  return prismaClient.preferences.update({
    where: {
      id: id,
    },
    data: preferences,
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const remove = async (request) => {
  const id = Number(request.params.id);

  const findPreferences = await prismaClient.preferences.findUnique({
    where: {
      id: id,
    },
    select: {
      photo: true,
    },
  });

  if (findPreferences) {
    await deleteFileHelper(findPreferences.photo);
  } else {
    throw new ResponseError(404, "preferences not found!");
  }

  return prismaClient.preferences.delete({
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
  const id = Number(request.params.id);

  const countPreferences = await prismaClient.preferences.count({
    where: {
      id: id,
    },
  });

  if (countPreferences === 0) {
    throw new ResponseError(404, "preferences not found!");
  }

  return prismaClient.preferences.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      photo: true,
      recipe_preferences: {
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
  return prismaClient.preferences.findMany({
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

export default { create, update, remove, getDetail, getAll };
