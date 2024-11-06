import React, { useState } from "react";
import { Box, Typography, Button, TextField, useTheme } from "@mui/material";
import { tokensDark } from "themes"; // Use tokensDark or tokensLight, depending on your theme setup

const TrayImageUploader = () => {
  const theme = useTheme();
  const colors = tokensDark; // Adjust based on your desired theme

  const [images, setImages] = useState([]);
  const [flightNumber, setFlightNumber] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [message, setMessage] = useState(""); // Message to display after submission

  // Handle image selection
  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages(uploadedImages);
  };

  // Simulate a successful submission
  const handleSubmit = () => {
    setMessage("Images uploaded successfully! (Simulated response)");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <Box m="20px">
      <Typography variant="h4" color={colors.primary[500]}>
        New Report
      </Typography>
      <Typography variant="body1" color={colors.grey[600]} mt={2}>
        Upload tray images for analysis. We will analyze the food waste and meal performance based on the image.
      </Typography>

      {/* Image Upload Input */}
      <Box
        mt={4}
        p={2}
        border="2px dashed"
        borderColor={colors.grey[500]}
        borderRadius="8px"
        textAlign="center"
        component="label"
        htmlFor="image-upload"
      >
        <Typography>Drag and drop image here</Typography>
        <Typography>or browse files</Typography>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </Box>

      {/* Image Preview */}
      <Box display="flex" justifyContent="center" mt={4}>
        {images.length > 0 && images.map((image, index) => (
          <Box key={index} mx={1}>
            <img
              src={URL.createObjectURL(image)}
              alt={`Preview ${index}`}
              width="150px"
              height="150px"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      {/* Flight Information Inputs */}
      <Box display="flex" justifyContent="space-between" mt={4}>
        <TextField
          label="Associated Flight Number"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date of the Flight"
          type="date"
          value={flightDate}
          onChange={(e) => setFlightDate(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
      >
        Submit
      </Button>

      {/* Display message after submission */}
      {message && (
        <Typography variant="h6" color={colors.greenAccent[500]} mt={2}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default TrayImageUploader;
