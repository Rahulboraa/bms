import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoute.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // tera React port
    credentials: true, // ← cookies allow karo
  }),
);
app.use(cookieParser());

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (err) {
    console.error(err.message);
  }
};
connectDB();

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
