import express from "express";
import UserController from "../controllers/UserController";
import { jwtCheck, jwtParse } from "../middleware/Auth";

const router = express.Router()

router.post("/",jwtCheck, UserController.createCurrentUser)
router.put("/", jwtCheck, jwtParse ,UserController.updateCurrentUser)

export default router;