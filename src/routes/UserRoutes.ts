import { validateUserReq } from './../middleware/validations';

import express from "express";
import UserController from "../controllers/UserController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router()

router.get("/", jwtCheck, jwtParse, UserController.getCurrentUser)
router.post("/",jwtCheck, UserController.createCurrentUser)
router.put("/", jwtCheck,validateUserReq, jwtParse, UserController.updateCurrentUser)

export default router;