import { io } from "../app.js";

const socketInit = () => {
    console.log("inside socket init");
    io.on('connection', (socket) => {
        console.log('ws connected');

        socket.on('orderUpdate', (msg) => {
            console.log("this is listening msg", msg);
            // socketEmit(msg)
        });

        socket.on('disconnect', () => {
            console.log('ws disconnected');
        });
    });
}

const socketEmit = (orderUpdate) => {
    io.emit('orderUpdate', orderUpdate); // This will emit the event to all connected sockets
}

const socketListening = (orderUpdate) => {

}

export { socketInit, socketEmit, socketListening }