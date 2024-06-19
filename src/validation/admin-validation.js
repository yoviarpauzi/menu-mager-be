import Joi from "joi";

const loginValidation = Joi.object({
  email: Joi.string().max(100).email().required(),
  password: Joi.string().min(8).max(100).required(),
});

export default loginValidation;
