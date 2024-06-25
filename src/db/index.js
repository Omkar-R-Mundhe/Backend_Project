import mongoose, { connection } from 'mongoose';
import { db_name } from '../constant.js';
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})


const connectDB=async()=>{
    try {
        
        const connectionString = `${process.env.MONGODB_URI}/${db_name}`;
        
       const connectionInstance=await mongoose.connect(connectionString);
       console.log(connectionInstance)
       app.on("error",(error)=>{
        console.log("ERROR",error)
        throw error
       })
              
    } catch (error) {
        console.log("MongoDB connection error",error)
        process.exit(1)
    }
}

export default connectDB;