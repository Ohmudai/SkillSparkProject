import mongoose from "mongoose";
import { type } from "os";

const registerSchema = mongoose.Schema({
  userName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },

  password:{
    type:String,
    required:true,
  },

});

export const Register = mongoose.model("Register",registerSchema);


