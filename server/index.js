import express from 'express';
import dotenv from 'dotenv';
import ConnectMongoDB from './lib/dbConnection.js';
import routes from './router/index.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
  
app.use(express.json());

ConnectMongoDB();

app.use('/api',routes);


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port :${process.env.PORT}`);
});

