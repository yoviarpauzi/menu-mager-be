import validate from "../validation/validation.js";
import subscriberPlanValidation from "../validation/subscriber-plan-validation.js";
import prismaClient from "../application/database.js";
import ResponseError from "../error/response-error.js";

const upsert = async (request) => {
  const subscriberPlan = validate(subscriberPlanValidation, request.body);
  return prismaClient.subscriptionPlan.upsert({
    where: {
      id: 1,
    },
    create: {
      id: 1,
      price_per_serving: subscriberPlan.pricePerServing,
      subscription_plan_preferences: {
        create: subscriberPlan.preferences.map((preference) => {
          return {
            preferences: {
              connect: {
                name: preference.name,
              },
            },
          };
        }),
      },
    },
    update: {
      price_per_serving: Number(subscriberPlan.pricePerServing),
      subscription_plan_preferences: {
        deleteMany: {},
        create: subscriberPlan.preferences.map((preference) => {
          return {
            preferences: {
              connect: {
                name: preference.name,
              },
            },
          };
        }),
      },
    },
    select: {
      price_per_serving: true,
      subscription_plan_preferences: {
        select: {
          preferences: {
            select: {
              id: true,
              name: true,
              photo: true,
            },
          },
        },
      },
    },
  });
};

const get = async () => {
  const countSubscriberPlan = await prismaClient.subscriptionPlan.count({
    where: {
      id: 1,
    },
  });

  if (countSubscriberPlan === 0) {
    throw new ResponseError(400, "subscriber plan not found!");
  }

  return prismaClient.subscriptionPlan.findFirst({
    select: {
      price_per_serving: true,
      subscription_plan_preferences: {
        select: {
          preferences: {
            select: {
              id: true,
              name: true,
              photo: true,
            },
          },
        },
      },
    },
  });
};

export default {
  upsert,
  get,
};
