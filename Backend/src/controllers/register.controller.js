import { error } from "console";
import { createUser } from "../viewModel/user.viewmodel.js";
import validator from 'validator'
export const  register = async (req,res)=>{
 
 const  isStrong = validator.isStrongPassword(req.body.password,{
    minLength:8,
    minLowercase:1,
    minUppercase:1,
    minSymbols:1,
    minNumbers:1,
  });
  try {
    if(isStrong){

      const user = await createUser(req.body);
      res.status(201).json({
       success:true,
       message:"user created/registed successfully",
       UserDetails: user,
     });
    }
    else{
      throw(error);
    }
    
  } catch (error) {
    return res.status(400).json({
      success:false,
      message:"Cannot create/register user"
    })
  }
  
}



