import { Router } from "express";
import { getHashed } from "../../config/getHashed.js";
import { register } from "../controllers/register.controller.js";

const router =Router();

router.post('/create',getHashed,register);

export default router;



