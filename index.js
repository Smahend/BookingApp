import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import hotelsRoutes from './routes/hotels.js';
import roomsRoutes from './routes/rooms.js';
const app = express();
dotenv.config();
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MANGO);
        console.log("connected to Database");
     }
     catch(error){
         throw error;
     }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Database disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("Database connected");
})

// middleware
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/hotels",hotelsRoutes);
app.use("/api/rooms",roomsRoutes);


app.listen(8080,()=>{
    connect()
    console.log("Conntected to the server");
})
