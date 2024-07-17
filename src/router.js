import express from "express";
import { orderRouter } from "./routers/index.js";

const router = express.Router();

router.post(orderRouter);

export default router;