import preferencesService from "../service/preferences-service.js";

const create = async (req, res, next) => {
  try {
    const result = await preferencesService.create(req);
    res.status(201).json({
      status: "success",
      message: "success create preferences!",
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
    const result = await preferencesService.update(req);
    res.status(200).json({
      status: "success",
      message: "success update preferences!",
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
    const result = await preferencesService.remove(req);
    res.status(200).json({
      status: "success",
      message: "success remove preferences!",
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
    const result = await preferencesService.getDetail(req);
    res.status(200).json({
      status: "success",
      message: "success get detail preferences!",
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
    const result = await preferencesService.getAll();
    res.status(200).json({
      status: "success",
      message: "success get all preferences!",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  update,
  remove,
  getDetail,
  getAll,
};
