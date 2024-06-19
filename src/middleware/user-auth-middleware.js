import prismaClient from "../application/database.js";

const userAuthMiddleware = async (req, res, next) => {
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

    req.user = user;
    next();
  }
};

export default userAuthMiddleware;
