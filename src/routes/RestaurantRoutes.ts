import express from "express";
import multer from "multer";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 5 * 1024 * 1025
    }
})

router.post("/", upload.single("imageFile"), RestaurantController.createRestaurant)

export default router;