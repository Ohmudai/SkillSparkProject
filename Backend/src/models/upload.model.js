import { register } from "module";
import mongoose from "mongoose";


const uploadSchema = mongoose.Schema({
  id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"register",
  },
  profilepic:{
    type:String,
  }
})

