import mongoose from "mongoose";


const userSchema = mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    unique:true
},
linksIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'link_collection' }] // Array of link references
});

export default mongoose.model("user_collection", userSchema);
