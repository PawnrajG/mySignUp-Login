import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB...");
    }catch(error){
        console.error(`Failed to connect to MongoDb due to error: ${error.message}`);
        process.exit(1);
    }
}

export default ConnectMongoDB;