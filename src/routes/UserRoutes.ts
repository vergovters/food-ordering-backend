import express from "express";
import UserController from "../controllers/UserController";
import { jwtCheck } from "../middleware/Auth";

const router = express.Router()

router.post("/",jwtCheck, UserController.createCurrentUser)
router.put("/", UserController.updateCurrentUser)

export default router;