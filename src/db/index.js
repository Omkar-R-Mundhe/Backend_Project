import mongoose from 'mongoose';
import { db_name } from '../constant.js';
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})


;const connectDB=async()=>{
    try {
        
        const connectionString = `${process.env.MONGODB_URI}/${db_name}`;
        console.log(connectionString)
       const connectionInstance=await mongoose.connect(connectionString);
       
       console.log(`\n Mongodb connected .${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MongoDB connection error",error)
        process.exit(1)
    }
}

export default connectDB;