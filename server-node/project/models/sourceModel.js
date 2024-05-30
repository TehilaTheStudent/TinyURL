import mongoose from "mongoose";

const sourceSchema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },
    clicksCount:{
        required:true,
        type:Number,
        default:0,
    }
})

export default sourceSchema