import Joi from "joi";

const subscriberValidation = Joi.object({
  pricePerServing: Joi.number().required(),
  preferences: Joi.array().items(
    Joi.object({
      name: Joi.string().max(50).required(),
    })
  ),
});

export default subscriberValidation;
