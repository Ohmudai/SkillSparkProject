import cloudinary from "../../config/cloudinary.js";


const upload = async (req,res)=>{
    try {
      
    const uploadresponse = await cloudinary.uploader.upload(req.body.data,{upload_preset:'Test_first_time_cloudinary'});
    console.log(uploadresponse.url);

    res.status(200).json({
      success:true,
      message:"uploaded image",
      Response:uploadresponse,

    });
    } catch (error) {
      console.error(error.message);
    }
}

export default upload;



