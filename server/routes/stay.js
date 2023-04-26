import { Router } from "express";
import { getAll, getById } from "../controllers/stays.js";

const router = new Router()

//http://localhost:3002/api/stay

// getAll

router.get("/all", getAll)

//getOne
//http://localhost:3002/api/stay/:id
router.get("/:id", getById)


export default router