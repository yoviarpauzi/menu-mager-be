import recipeService from "../service/recipe-service.js";

const create = async (req, res, next) => {
  try {
    const result = await recipeService.create(req);
    res.status(201).json({
      status: "success",
      message: "success create recipe!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await recipeService.update(req);
    res.status(200).json({
      status: "success",
      message: "success update recipe!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const result = await recipeService.remove(req);
    res.status(200).json({
      status: "success",
      message: "success remove recipe!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const getDetail = async (req, res, next) => {
  try {
    const result = await recipeService.getDetail(req);
    res.status(200).json({
      status: "success",
      message: "success get detail recipe!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await recipeService.getAll();
    res.status(200).json({
      status: "success",
      message: "success get all recipe!",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { create, update, remove, getDetail, getAll };
