import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth.js"


const app = express();
dotenv.config();

//_______________________________

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//__Middleware________________________________

app.use(cors())               // чтобы отправлять запросы на сервер с разных IP
app.use(express.json())       //ответ с сервера будет приходить клиенту в формате json


//__Routes____________________________________

app.use("/api/auth", authRoute)


//__Start_____________________________________________
async function startBd(){
   try{
      await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.iuabdbm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,)
      console.log("DB OK")

      app.listen(PORT, ()=>
      console.log("server OK"))

   } catch(err){
      console.log(err)
      }
}
startBd()