import { uploadimgurl } from "../viewModel/user.viewmodel.js"

export const imageurl = async (req,res)=>{
  try {
    
    
    const userDetails = await uploadimgurl(req.body.email,req.body.profilePic);
    res.status(200).json({
      success:true,
      message:"image url uploaded successsfully",
      UploadedData:userDetails
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      message:"cannot upload image url"
    })
  }
}