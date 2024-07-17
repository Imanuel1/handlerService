import { notifyUIForOrderUpdated } from "../services/index.js";

const postOrderUpdate = async (req, res, next) => {
    const { body: data } = req;

    try {
        const notifyOrderUpdated =
            await notifyUIForOrderUpdated(data);

        console.log(
            `Notify ui that order updated - was successful`
        );
        res.send(notifyOrderUpdated);
    } catch (error) {
        console.error(
            `Notify ui has failed: ${error}`
        );
        next(error);
    }
};

export { postOrderUpdate }