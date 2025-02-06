import { Router } from "express";
import upload from "../controllers/upload.controller.js";
const router= Router();



router.post('/image',upload);

export default router;





