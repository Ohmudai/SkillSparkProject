import { retriveImgUrl } from "../viewModel/user.viewmodel.js";


 const retriveImage =async (req,res)=>{
  console.log(req.body);
  const url= await retriveImgUrl(req.body.email);
  
  try {
    res.status(200).json({
      success:true,
      Imageurl: url
    })
  } catch (error) {
    console.error(error.message);
  }
} 
export default retriveImage;

