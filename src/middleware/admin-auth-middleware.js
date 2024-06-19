import prismaClient from "../application/database.js";

const adminAuthMiddleware = async (req, res, next) => {
  const token = req.get("Authorization")?.split(" ")[1];
  if (!token) {
    res
      .status(401)
      .json({
        status: "fail",
        message: "unauthorized!",
      })
      .end();
  } else {
    const user = await prismaClient.user.findUnique({
      where: {
        token: token,
      },
      select: {
        role: true,
      },
    });

    if (!user) {
      res
        .status(401)
        .json({
          status: "fail",
          message: "unauthorized!",
        })
        .end();
    }

    if (user.role !== "admin") {
      res
        .status(401)
        .json({
          status: "fail",
          message: "this user role is not admin!",
        })
        .end();
    }

    req.user = user;
    next();
  }
};

export default adminAuthMiddleware;
