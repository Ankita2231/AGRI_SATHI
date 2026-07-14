import express from "express";
import dotenv from "dotenv";
import { generateFarmingPredictionController } from "../controller/farming.controller.js";


dotenv.config();
const farmingRouter = express.Router();

farmingRouter.post("/predict",generateFarmingPredictionController )

export default farmingRouter;