import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req);
    res.status(201).json({
      status: "success",
      message: "success create user!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req);
    res.status(200).json({
      status: "success",
      message: "success login user!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const changePassword = async (req, res, next) => {
  try {
    await userService.changePassword(req);
    res.status(200).json({
      status: "success",
      message: "success change password user!",
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await userService.update(req);
    res.status(200).json({
      status: "success",
      message: "success update user!",
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
    const result = await userService.remove(req);
    res.status(200).json({
      status: "success",
      message: "success remove user!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

export default {
  register,
  login,
  changePassword,
  update,
  remove,
};
