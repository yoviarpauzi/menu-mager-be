import materialService from "../service/material-service.js";

const create = async (req, res, next) => {
  try {
    const result = await materialService.create(req);
    res.status(201).json({
      success: "success",
      message: "success create material!",
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
    const result = await materialService.update(req);
    res.status(200).json({
      status: "success",
      message: "success update material!",
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
    const result = await materialService.remove(req);
    res.status(200).json({
      status: "success",
      message: "success remove material!",
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
    const result = await materialService.getDetail(req);
    res.status(200).json({
      status: "success",
      message: "success get detail material!",
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
    const result = await materialService.getAll();
    res.status(200).json({
      status: "success",
      message: "success get all materials!",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { create, update, remove, getDetail, getAll };
