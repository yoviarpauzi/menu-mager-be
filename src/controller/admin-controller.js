import adminService from "../service/admin-service.js";

const login = async (req, res, next) => {
  try {
    const result = await adminService.login(req);
    res.status(200).json({
      status: "success",
      message: "login successfully!",
      data: {
        ...result,
      },
    });
  } catch (e) {
    next(e);
  }
};

export default {
  login,
};
