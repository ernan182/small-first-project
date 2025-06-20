import mongoose from "mongoose";

//
// Define the schema for application documents in MongoDB
// On this context we are creating a schema for the user
// With the most basic data
//
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String
    },
    phonenumber:{
        type:String
    },
    profile_picture:{
        type:String
    }
},{timestamps:true});

export default mongoose.model("User",userSchema);
    