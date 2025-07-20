const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root route
app.get("/", (req, res) => {
  res.send("Bhavana service API is running!");
});

// Sample service route
app.get('/api/services', (req, res) => {
  res.json([{ name: "Hair Spa", price: 499 }]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
