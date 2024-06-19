import validate from "../validation/validation.js";
import availableFoodValidation from "../validation/available-food-validation.js";
import prismaClient from "../application/database.js";
import ResponseError from "../error/response-error.js";

const create = async (request) => {
    const payload = {
        startDate: request.body.startDate,
        recipe: request.body.recipe,
    };

    const availableFood = validate(availableFoodValidation, payload);

    availableFood.endDate = new Date(
        new Date(availableFood.startDate).setDate(
            new Date(availableFood.startDate).getDate() + 7
        )
    ).toISOString();

    const countAvailableFood = await prismaClient.availableFood.count({
        where: {
            start_date: {lte: availableFood.endDate},
            end_date: {gte: availableFood.startDate},
        },
    });

    if (countAvailableFood === 1) {
        throw new ResponseError(
            409,
            "available food for this date range already exists!",
        );
    }

    return prismaClient.availableFood.create({
        data: {
            start_date: availableFood.startDate,
            end_date: availableFood.endDate,
            available_food_recipe: {
                create: availableFood.recipe.map((recipe) => {
                    return {
                        recipe: {
                            connect: {
                                name: recipe.name,
                            },
                        },
                    };
                }),
            },
        },
        select: {
            id: true,
            start_date: true,
            end_date: true,
            available_food_recipe: {
                select: {
                    recipe: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            photo: true,
                        },
                    },
                },
            },
        },
    });
};

const update = async (request) => {
    const id = request.params.id;

    const payload = {
        startDate: request.body.startDate,
        recipe: request.body.recipe,
    };

    const availableFood = validate(availableFoodValidation, payload);

    availableFood.endDate = new Date(
        new Date(availableFood.startDate).setDate(
            new Date(availableFood.startDate).getDate() + 7
        )
    ).toISOString();

    const isAvailableFoodExist = await prismaClient.availableFood.count({
        where: {
            id: id,
        },
    });

    if (!isAvailableFoodExist) {
        throw new ResponseError(404, "available food not found!");
    }

    const countAvailableFood = await prismaClient.availableFood.count({
        where: {
            id: {
                not: id,
            },
            start_date: {lte: availableFood.endDate},
            end_date: {gte: availableFood.startDate},
        },
    });

    if (countAvailableFood === 1) {
        throw new ResponseError(
            409,
            "available food for this date range already exists!",
        );
    }

    return prismaClient.availableFood.update({
        where: {
            id: id,
        },
        data: {
            start_date: availableFood.startDate,
            end_date: availableFood.endDate,
            available_food_recipe: {
                deleteMany: {},
                create: availableFood.recipe.map((recipe) => {
                    return {
                        recipe: {
                            connect: {
                                name: recipe.name,
                            },
                        },
                    };
                }),
            },
        },
        select: {
            id: true,
            start_date: true,
            end_date: true,
            available_food_recipe: {
                select: {
                    recipe: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            photo: true,
                        },
                    },
                },
            },
        },
    });
};

const remove = async (request) => {
    const id = request.params.id;

    const countAvailableFood = await prismaClient.availableFood.count({
        where: {
            id: id,
        },
    });

    if (countAvailableFood === 0) {
        throw new ResponseError(404, "available food not found!");
    }

    return prismaClient.availableFood.delete({
        where: {
            id: id,
        },
        select: {
            id: true,
            start_date: true,
            end_date: true,
            available_food_recipe: {
                select: {
                    recipe: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            photo: true,
                        },
                    },
                },
            },
        },
    });
};

const getDetail = async (request) => {
    const id = request.params.id;

    const countAvailableFood = await prismaClient.availableFood.count({
        where: {
            id: id,
        },
    });

    if (countAvailableFood === 0) {
        throw new ResponseError(409, "available food not found!");
    }

    return prismaClient.availableFood.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            start_date: true,
            end_date: true,
            available_food_recipe: {
                select: {
                    recipe: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            photo: true,
                        },
                    },
                },
            },
        },
    });
};

const getAll = async () => {
    return prismaClient.availableFood.findMany({
        select: {
            id: true,
            start_date: true,
            end_date: true,
        },
    });
};

const getByUserSubscription = async (request) => {
    const token = request.get("Authorization").split(" ")[1];

    const userSubscriptionActive = prismaClient.user.findUnique({
        where: {
            token: token,
        },
        select: {
            subscription: {
                where: {
                    is_active: true,
                },
                select: {
                    subscription_detail: {
                        select: {
                            start_date: true,
                            end_date: true,
                        },
                    },
                },
            },
        },
    });

    const startDate =
        userSubscriptionActive.subscription.subscription_detail.start_date;
    const endDate =
        userSubscriptionActive.subscription.subscription_detail.end_date;

    return prismaClient.availableFood.findMany({
        where: {
            start_date: {
                lte: endDate,
            },
            end_date: {
                gte: startDate,
            },
        },
        select: {
            id: true,
            start_date: true,
            end_date: true,
        },
    });
};

export default {
    create,
    update,
    remove,
    getDetail,
    getAll,
    getByUserSubscription,
};
