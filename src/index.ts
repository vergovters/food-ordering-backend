import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_DB_CONNECTION as string)
    .then(()=>console.log("connected to db"))

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test",async (req: Request, res: Response) => {
    res.json({
        message: "hello"
    })
}); 

app.listen(7000, ()=>{
    console.log("server started on 7000")
})