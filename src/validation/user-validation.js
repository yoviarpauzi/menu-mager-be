import Joi from "joi";

const register = Joi.object({
  subscriptionDetail: Joi.object({
    numOfPeople: Joi.number().required(),
    mealsPerWeek: Joi.number().required(),
    totalServing: Joi.number().required(),
    boxPrice: Joi.number().required(),
    pricePerServing: Joi.number().required(),
    shippingPrice: Joi.number().required(),
    totalPrice: Joi.number().required(),
    preferences: Joi.array().items(
      Joi.object({
        name: Joi.string().max(100).required(),
      }),
    ),
  }),
  user: Joi.object({
    name: Joi.string().required().max(100),
    email: Joi.string().required().max(100),
    password: Joi.string().required().min(8).max(100),
  }),
  address: Joi.object({
    province: Joi.string().required().max(50),
    district: Joi.string().required().max(50),
    subDistrict: Joi.string().required().max(50),
    postCode: Joi.string()
      .pattern(/^[0-9]{1,5}$/)
      .required()
      .max(5),
    village: Joi.string().required().max(50),
    rt: Joi.number().required(),
    rw: Joi.number().required(),
    detailAddress: Joi.string(),
  }),
  subscriptionDelivery: Joi.array().items(
    Joi.object({
      date: Joi.date().iso().required(),
      totalRecipe: Joi.number().required(),
      recipe: Joi.array().items(
        Joi.object({
          name: Joi.string().max(100).required(),
          amount: Joi.number().required(),
        }),
      ),
    }),
  ),
});

const login = Joi.object({
  email: Joi.string().email().max(100).required(),
  password: Joi.string().min(8).max(100).required(),
});

const changePassword = Joi.object({
  password: Joi.string().min(8).max(100).required(),
});

const update = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
  phone: Joi.string().max(12),
});

export default {
  register,
  login,
  update,
  changePassword,
};
