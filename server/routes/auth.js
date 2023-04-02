import { Router } from "express";
import{ register, login, getMe } from "../controllers/auth.js";
import {checkAuth} from "../middlewares/checkAuth.js"



const router = new Router();


//http://localhost:3002/api/auth

// ____Registration_________________________

router.post("/register", register)



//_____LogIn___________________________

router.post("/login", login)

//_____Get Me______________________________________


router.get("/me", checkAuth,  getMe)



export default router