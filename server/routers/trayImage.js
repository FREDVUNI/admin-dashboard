import express from "express";
import multer from "multer";

const router = express.Router();

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Mock image upload route
router.post("/", upload.array("images"), (req, res) => {
  const { flightNumber, flightDate } = req.body;
  const imageUrls = req.files.map((file, index) => `https://mock-url.com/image${index + 1}.jpg`);

  res.status(200).json({
    message: "Images uploaded successfully (mocked response)",
    flightNumber,
    flightDate,
    imageUrls,
  });
});

export default router;
