import Joi from "joi";

const preferencesValidation = Joi.object({
  name: Joi.string().max(50).required(),
  photo: Joi.string().max(100).required(),
});

export default preferencesValidation;
