import validate from "../validation/validation.js";
import loginValidation from "../validation/admin-validation.js";
import prismaClient from "../application/database.js";
import bcrypt from "bcrypt";
import ResponseError from "../error/response-error.js";

const login = async (request) => {
  const admin = validate(loginValidation, request.body);

  const findAdmin = await prismaClient.user.findUnique({
    where: {
      email: admin.email,
    },
    select: {
      email: true,
      password: true,
      role: true,
    },
  });

  if (!findAdmin) {
    throw new ResponseError(401, "email or password is incorrect!");
  }

  const isPasswordValid = await bcrypt.compare(
    admin.password,
    findAdmin.password,
  );

  if (!isPasswordValid) {
    throw new ResponseError(401, "email or password is incorrect!");
  }

  if (findAdmin.role !== "admin") {
    throw new ResponseError(401, "access denied. Admins only!");
  }

  const token = crypto.randomUUID();

  return prismaClient.user.update({
    where: {
      email: admin.email,
    },
    data: {
      token: token,
    },
    select: {
      token: true,
    },
  });
};

export default {
  login,
};
