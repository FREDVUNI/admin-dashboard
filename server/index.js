import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import trayImageRoutes from './routers/trayImage.js'; // Import tray image route

dotenv.config();

const app = express();

// Middleware setup
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 9000;

// Base route for server testing
app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Server is running",
  });
});

// Tray Image Uploader route (mocked for testing)
app.use("/tray-image", trayImageRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
