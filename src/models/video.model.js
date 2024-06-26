import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new mongoose.Schema(
    {
        videoFile:{
            type:String,
            required:true,

        },
        thumbnail:{
            type:String,
            required:true,
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        title:{
            type:String,
            required:true,

        },
        description:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            required:true,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        }

        
    },
    {timestamps:true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);














































/*
==>BSON data files are written in binary codes
==>Used to store the data
==>The json files in binaray encoded form are called as BSON
 */ 

