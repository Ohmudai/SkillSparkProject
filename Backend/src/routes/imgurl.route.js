import retriveImage from "../controllers/retriveImage.controller.js";
import Router from 'express'

const router = Router();

router.post("/imageurl",retriveImage);

export default router;


