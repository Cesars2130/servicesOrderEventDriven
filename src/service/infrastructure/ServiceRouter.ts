import express from "express";

import {
  createServiceEstacionController,
} from "./dependencies";

export const serviceEstacionRouter = express.Router();


serviceEstacionRouter.post(
  "/",
  createServiceEstacionController.run.bind(createServiceEstacionController)
);
