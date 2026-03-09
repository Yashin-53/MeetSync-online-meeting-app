import express from 'express';
import {createServer} from 'node:http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import {connectToSocket} from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: '40kb'}));
app.use(express.urlencoded({extended: true, limit: '40kb'}));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    const connectionDB = await mongoose.connect("mongodb://yashin:Ansari@ac-d0l0hkn-shard-00-00.xjujlfq.mongodb.net:27017,ac-d0l0hkn-shard-00-01.xjujlfq.mongodb.net:27017,ac-d0l0hkn-shard-00-02.xjujlfq.mongodb.net:27017/?ssl=true&replicaSet=atlas-2csnay-shard-0&authSource=admin&retryWrites=true&w=majority");
    console.log("Mongo Connected DB host: ", connectionDB.connection.host);
    server.listen(8000,  () => {
        console.log('Server is running on port 8000');
    });
}

start();
