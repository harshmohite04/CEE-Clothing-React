require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use environment variables for sensitive data
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://mohiteharsh639:t5bnvvXsAJ2y72Vn@cluster0.0nsbt.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

// Define Mongoose schema and model
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const Item = mongoose.model("Item", itemSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/landingPage/items", async (req, res) => {
  try {
    const itemsList = await Item.find();
    res.json({ success: true, items: itemsList });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching items",
      error: err.message,
    });
  }
});

app.post("/landing/createItems", async (req, res) => {
  try {
    const { name, price, category } = req.query;
    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }
    const createdItem = await Item.create({ name, price, category });
    res.json({
      success: true,
      message: "Item created successfully",
      item: createdItem,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating item",
      error: err.message,
    });
  }
});

app.post("/create/bla", async (req, res) => {
  try {
    const createdDemo = await Item.create({
      name: "zudio",
      price: 909,
      category: "shirt",
    });
    res.json({ success: true, item: createdDemo });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating item",
      error: err.message,
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
