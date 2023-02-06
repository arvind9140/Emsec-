import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 Name: {
    type:String,
     require:true
 },
 Password:{
    type: String,
     require: true
 },
 role:{
    type: String,
 require: true
 }
});

export  default  mongoose.model("user", userSchema,"user");


