const express = require("express");
const mongoose = require("mongoose");

const app = express();
// Use environment variables for sensitive data
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://mohiteharsh639:t5bnvvXsAJ2y72Vn@cluster0.0nsbt.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Define Mongoose schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

const Item = mongoose.model("Item", itemSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/landingPage/items", (req, res) => {
  let itemsList = Item.find();
  res.send(itemsList);
});

app.listen(3000, () => {
  console.log(`This server runs on 3000`);
});
