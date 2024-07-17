import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { PORT } from "./environment.js";
import router from "./router.js";
import { errorHandler, reqLogPrefix } from "./middlewares/error-handler.js";
import { socketInit } from "./middlewares/socket.js";


const app = express();
const httpServer = createServer(app)
export const io = new Server(httpServer);

app
    .use(cors())
    .use(express.json({ limit: "5mb" }))
    .use(express.urlencoded({ extended: false }))
    .use(reqLogPrefix)
    //   .use(express.static("build"))
    .use("/api", router)
    .use(errorHandler)

httpServer.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    socketInit();
});