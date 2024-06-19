import Joi from "joi";

const availableFoodValidation = Joi.object({
  startDate: Joi.date().iso().required(),
  recipe: Joi.array().items(
    Joi.object({
      name: Joi.string().max(100).required(),
    }),
  ),
});

export default availableFoodValidation;
