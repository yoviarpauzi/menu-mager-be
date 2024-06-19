import ResponseError from "../error/response-error.js";

const errorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        status: "fail",
        message: err.message,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        status: "fail",
        message: err.message,
      })
      .end();
  }
};

export default errorMiddleware;
