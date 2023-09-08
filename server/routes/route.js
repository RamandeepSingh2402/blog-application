import express from "express";
import { signupUser } from "../controller/user-controller";


const router = express.Router();

// signup is the end point for this post API
router.post('/signup', signupUser); 

export default router;