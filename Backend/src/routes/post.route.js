import {Router} from 'express';
import { allPost, getPost, HandleComments, HandleLikes, post, postdelete, showCmnt } from '../controllers/post.controller.js';
 import multer from 'multer'
 import cloudinary from '../../config/cloudinary.js'; 


const router = Router();

const storage= multer.memoryStorage();
const upload= multer({storage:storage});

router.post('/post',upload.single('file'),async (req,res,next)=>{
  try {
    const base64String = req.file.buffer.toString('base64');
  const imageData = `data:${req.file.mimetype};base64,${base64String}`;
  
  
    const uploadResponse = await cloudinary.uploader.upload(imageData,{upload_preset:'Test_first_time_cloudinary'},{folder:'SocialmediaMern'});
    req.body.post={
      imageurl:uploadResponse.url,
    }
    
  
  next();
  } catch (error) {
    console.error(error.message);
  }

},post);

router.post('/show',getPost);

router.post('/delete',postdelete);
router.post('/like',HandleLikes);

router.post('/comment',HandleComments);
router.post('/showcomment',showCmnt);
router.get('/allpost',allPost);

export default router;