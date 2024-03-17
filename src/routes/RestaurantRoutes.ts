import express from "express";
import multer from "multer";
import RestaurantController from "../controllers/RestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateRestaurantRequest } from "../middleware/validations";

const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 5 * 1024 * 1025
    }
})

router.post("/", upload.single("imageFile"), validateRestaurantRequest, jwtCheck, jwtParse, RestaurantController.createRestaurant)

export default router;