import { Register } from "../models/register.model.js";




export const createUser=async (data)=>{
  try {
    
    const user  = await new Register(data);

    return user.save();
  } catch (error) {
    console.error(`Error creating user error occured: ${error.message}`);
    
  }

}