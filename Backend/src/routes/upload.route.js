import { Router } from "express";
import upload from "../controllers/upload.controller.js";
import { imageurl } from "../controllers/uploadimgurl.controller.js";



const router= Router();



router.post('/image',upload);
router.patch('/upload',imageurl);


export default router;





