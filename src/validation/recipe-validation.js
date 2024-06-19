import Joi from "joi";

const recipeValidation = Joi.object({
  name: Joi.string().max(100).required(),
  photo: Joi.string().max(100).required(),
  description: Joi.string().required(),
  material: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().max(100).required(),
        amount: Joi.number().required(),
        unit: Joi.string().required(),
      }),
    )
    .required(),
  allergy: Joi.array().items(
    Joi.object({
      name: Joi.string().max(100).required(),
    }),
  ),
  preferences: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().max(100).required(),
      }),
    )
    .required(),
  instruction: Joi.array().items(
    Joi.object({
      description: Joi.string().required(),
    }),
  ),
});

export default recipeValidation;
