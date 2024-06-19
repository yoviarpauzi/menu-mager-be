import Joi from "joi";

const materialValidation = Joi.object({
  name: Joi.string().max(100).required(),
  photo: Joi.string().max(100).required(),
});

export default materialValidation;
