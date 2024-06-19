import allergyService from "../service/allergy-service.js";

const create = async (req, res, next) => {
  try {
    const result = await allergyService.create(req);
    res.status(201).json({
      status: "success",
      message: "success create allergy!",
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
    const result = await allergyService.update(req);
    res.status(200).json({
      status: "success",
      message: "success update allergy!",
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
    const result = await allergyService.remove(req);
    res.status(200).json({
      status: "success",
      message: "success remove allergy!",
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
    const result = await allergyService.getDetail(req);
    res.status(200).json({
      status: "success",
      message: "success get detail allergy!",
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
    const result = await allergyService.getAll();
    res.status(200).json({
      status: "success",
      message: "success get all allergy!",
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
