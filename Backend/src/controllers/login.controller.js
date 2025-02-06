import { findUser } from "../viewModel/login.viewmodel.js";
import verifyHash from "../../config/verifyHash.js";
import getToken from "../../config/getToken.js";
import verifyToken from "../../config/verifyToken.js";
export const User = async (req,res)=>{
  try {
    req.body.email=req.body.email.toLowerCase();
    
    const userDetails = await findUser(req.body.email);
    console.log(userDetails);
    const token =getToken(req.body.email);
    
    
    if(userDetails &&  await verifyHash(userDetails.password,req.body.password) ){
        verifyToken(token);
     
      return res.status(200).json({
        success:true,
        message:"User exists",
        data:userDetails,
        token:token
      });
      
    }
    else{
      return res.status(400).json({
        success:false,
        message:"User doesnot exist"
      })
    }
  } catch (error) {
   console.error(`Error finding user error ocured : ${error.message}`);
  }
} 

