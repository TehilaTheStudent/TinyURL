import mongoose from "mongoose";
import clickSchema from "./clickModel.js";
import sourceSchema from "./sourceModel.js";

const linkSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user_collection', required: true },
  clicks: {
    type: [clickSchema],
    required: true
  },
  sourceParamKey: {
    type: String,
    default:'source',
    required:false
  },
  sources: {
    type: [sourceSchema],
    required:false
  }

})

export default mongoose.model("link_collection", linkSchema)