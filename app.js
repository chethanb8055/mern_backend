import express from "express";
import { dbConnection } from "./databse/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["https://mern-simple.vercel.app/"], // Corrected port
    methods: ["POST"],
    credentials: true, // Corrected spelling
  })
);

app.get("/", (req, res) => {
  res.send("Home");
});

// console.log(process.env.FRONTEND_URL);

app.use("/api/v1/message", messageRouter);
dbConnection();

export default app;
