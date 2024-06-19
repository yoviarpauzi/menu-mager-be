import availableFoodService from "../service/available-food-service.js";

const create = async (req, res, next) => {
  try {
    const result = await availableFoodService.create(req);
    res.status(200).json({
      status: "success",
      message: "success add available food!",
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
    const result = await availableFoodService.update(req);
    res.status(200).json({
      status: "success",
      message: "success update available food!",
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
    const result = await availableFoodService.remove(req);
    res.status(200).json({
      status: "success",
      message: "success remove available food!",
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
    const result = await availableFoodService.getDetail(req);
    res.status(200).json({
      status: "success",
      message: "success get detail available food!",
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
    const result = await availableFoodService.getDetail();
    res.status(200).json({
      status: "success",
      message: "success get all available food!",
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
