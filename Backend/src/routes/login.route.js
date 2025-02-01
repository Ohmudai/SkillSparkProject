import { Router } from "express";
import { User } from "../controllers/login.controller.js";


const router = Router();

router.post('/login',User);

export default router;
