import Joi from "joi";

const allergyValidation = Joi.object({
  name: Joi.string().required().max(100),
});

export default allergyValidation;
