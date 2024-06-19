import express from "express";
import userAuthMiddleware from "../middleware/user-auth-middleware.js";
import availableFoodController from "../controller/available-food-controller.js";
import preferencesController from "../controller/preferences-controller.js";
import recipeController from "../controller/recipe-controller.js";
import materialController from "../controller/material-controller.js";
import allergyController from "../controller/allergy-controller.js";
import userController from "../controller/user-controller.js";

const userApi = express.Router();

// user
userApi.patch(
  "/api/changepassword",
  userAuthMiddleware,
  userController.changePassword,
);
userApi.patch("/api/update", userAuthMiddleware, userController.update);
userApi.delete("/api/delete", userAuthMiddleware, userController.remove);

// preferences
userApi.get(
  "/api/preference/:id",
  userAuthMiddleware,
  preferencesController.getDetail,
);
userApi.get(
  "/api/preference",
  userAuthMiddleware,
  preferencesController.getAll,
);

// recipe
userApi.get("/api/recipe/:id", userAuthMiddleware, recipeController.getDetail);
userApi.get("/api/recipe", recipeController.getAll);

// material
userApi.get(
  "/api/material/:id",
  userAuthMiddleware,
  materialController.getDetail,
);
userApi.get("/api/material", userAuthMiddleware, materialController.getAll);

// allergy
userApi.get(
  "/api/allergy/:id",
  userAuthMiddleware,
  allergyController.getDetail,
);
userApi.get("/api/allergy", userAuthMiddleware, allergyController.getAll);

// available food
userApi.get(
  "/api/availablefood/:id",
  userAuthMiddleware,
  availableFoodController.getDetail,
);
userApi.get(
  "/api/availablefood",
  userAuthMiddleware,
  availableFoodController.getAll,
);

export default userApi;
