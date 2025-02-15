import mongoose from "mongoose";
import User from '../models/user.model.js';


export const findUser = async (email)=>{

  return await User.findOne({email});

}