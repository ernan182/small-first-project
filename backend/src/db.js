import mongoose from "mongoose";
//
//Config to connect to our db
//
export function connectdb(){
    try {
     mongoose.connect("")
    console.log(">>>>>>>>CONNECTED DB")
    } catch (error) {
        console.log(error)
    }
}