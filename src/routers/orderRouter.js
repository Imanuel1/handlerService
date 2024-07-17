import express from "express";
import { postOrderUpdate } from "../controllers/index.js";

export const orderRouter = express.Router();

orderRouter.route("/order").post(postOrderUpdate);