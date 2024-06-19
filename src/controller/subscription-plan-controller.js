import subscriberPlanService from "../service/subscriber-plan-service.js";

const create = async (req, res, next) => {
  try {
    const result = await subscriberPlanService.upsert(req);
    res.status(201).json({
      status: "success",
      message: "success create subscriber plan!",
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
    const result = await subscriberPlanService.upsert(req);
    res.status(201).json({
      status: "success",
      message: "success update subscriber plan!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await subscriberPlanService.get();
    res.status(200).json({
      status: "success",
      message: "success get subscriber plan",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  update,
  get,
};
