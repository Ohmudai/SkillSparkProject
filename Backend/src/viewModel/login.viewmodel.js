import mongoose from "mongoose";
import { Register } from "../models/register.model.js";


export const findUser = async (email)=>{

  return await Register.findOne({email});

}

