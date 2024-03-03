import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";
import UserRouter from "./routes/UserRoutes"


mongoose
    .connect(process.env.MONGO_DB_CONNECTION as string)
    .then(()=>console.log("connected to db"))

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", UserRouter)

app.listen(7000, ()=>{
    console.log("server started on 7000")
})