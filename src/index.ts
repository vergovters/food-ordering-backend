import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";
import UserRouter from "./routes/UserRoutes"
import RestaurantRouter from "./routes/RestaurantRoutes"
import ResRoutes from "./routes/ResRoutes"
import OrderRouter from "./routes/OrderRoutes"
import {v2 as cloudinary} from "cloudinary"

mongoose
    .connect(process.env.MONGO_DB_CONNECTION as string)
    .then(()=>console.log("connected to db"))

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", UserRouter)
app.use("/api/restaurant", RestaurantRouter)
app.use("/api/res", ResRoutes)
app.use("/api/order", OrderRouter)

app.listen(7000, ()=>{
    console.log("server started on 7000")
})