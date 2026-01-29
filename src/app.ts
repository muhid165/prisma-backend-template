import express from "express";
import morgan from "morgan";
import cors from "cors";
import cron from "node-cron";
import path from "path";
import fs from "fs";
import { errorHandler } from "./Utils/errorHandler";
import authRoutes from "./api/Routes/auth";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

cron.schedule("* * * * *", async () => {
  try {
    // await fetchOrderDetails();
    console.log("HELLO BACKEND!!!", new Date());
  } catch (error) {
    console.error("Order Cron execution error:", error);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;
