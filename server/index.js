import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectMongoDB from './dbConnection.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

ConnectMongoDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port :${process.env.PORT}`);
});