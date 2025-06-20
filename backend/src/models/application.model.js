import mongoose from "mongoose";
//
// Define the schema for application documents in MongoDB
// On this context im using application like apps that u made 
// and wanna share 😼
//
const applicationSchema =  new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
    },
    link:{
        type:String,
    },
    date:{
        type:Date,
        default: Date.now()
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});

export default mongoose.model("Application",applicationSchema);