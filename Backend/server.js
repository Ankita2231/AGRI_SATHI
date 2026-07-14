import express from "express";
import dotenv from "dotenv";
import farmingRouter from "./Routes/farming.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})


app.use(express.json());


app.use("/api/farming", farmingRouter);