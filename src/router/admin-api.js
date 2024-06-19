import express from "express";
import adminAuthMiddleware from "../middleware/admin-auth-middleware.js";
import upload from "../middleware/upload-middleware.js";
import preferencesController from "../controller/preferences-controller.js";
import recipeController from "../controller/recipe-controller.js";
import materialController from "../controller/material-controller.js";
import allergyController from "../controller/allergy-controller.js";
import subscriptionPlanController from "../controller/subscription-plan-controller.js";
import availableFoodController from "../controller/available-food-controller.js";

const adminApi = express.Router();

// preferences
adminApi.post(
  "/api/preference",
  [upload.single("photo"), adminAuthMiddleware],
  preferencesController.create
);
adminApi.put(
  "/api/preference/:id",
  [upload.single("photo"), adminAuthMiddleware],
  preferencesController.update
);
adminApi.delete(
  "/api/preference/:id",
  adminAuthMiddleware,
  preferencesController.remove
);

// recipe
adminApi.post(
  "/api/recipe",
  [upload.single("photo"), adminAuthMiddleware],
  recipeController.create
);
adminApi.put(
  "/api/recipe/:id",
  [upload.single("photo"), adminAuthMiddleware],
  recipeController.update
);
adminApi.delete(
  "/api/recipe/:id",
  adminAuthMiddleware,
  recipeController.remove
);

// allergy
adminApi.post("/api/allergy", adminAuthMiddleware, allergyController.create);
adminApi.put("/api/allergy/:id", adminAuthMiddleware, allergyController.update);
adminApi.delete(
  "/api/allergy/:id",
  adminAuthMiddleware,
  allergyController.remove
);

//material
adminApi.post(
  "/api/material",
  [upload.single("photo"), adminAuthMiddleware],
  materialController.create
);
adminApi.put(
  "/api/material/:id",
  [upload.single("photo"), adminAuthMiddleware],
  materialController.update
);
adminApi.delete(
  "/api/material/:id",
  adminAuthMiddleware,
  materialController.remove
);

// subscriberPlan
adminApi.post(
  "/api/plan",
  adminAuthMiddleware,
  subscriptionPlanController.create
);
adminApi.put(
  "/api/plan",
  adminAuthMiddleware,
  subscriptionPlanController.update
);

// available food
adminApi.post(
  "/api/availablefood",
  adminAuthMiddleware,
  availableFoodController.create
);
adminApi.put(
  "/api/availablefood/:id",
  adminAuthMiddleware,
  availableFoodController.update
);
adminApi.delete(
  "/api/availablefood/:id",
  adminAuthMiddleware,
  availableFoodController.remove
);

export default adminApi;
