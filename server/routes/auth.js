import { Router } from "express";
import{ register, login, getMe, changeData } from "../controllers/auth.js";
import {checkAuth} from "../middlewares/checkAuth.js"



const router = new Router();


//http://localhost:3002/api/auth

// ____Registration_________________________

router.post("/register", register)



//_____LogIn___________________________

router.post("/login", login)

//_____Get Me______________________________________


router.get("/me", checkAuth,  getMe)

//__Change Data_______________________________

router.put("/change",checkAuth, changeData)


export default router