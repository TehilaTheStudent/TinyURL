import mongoose from "mongoose";

const clickSchema= mongoose.Schema({
    clickedAt: {
        type: Date,
        default: Date.now,
        required: true,
      },
      ipAddress: {
        type: String,
        required: true,
      },
      sourceParamValue:{
        type:String
      }
})


export default clickSchema  