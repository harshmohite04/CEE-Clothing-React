const express = require("express");
const mongoose = require("mongoose");

const app = express();
// Use environment variables for sensitive data
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://mohiteharsh639:t5bnvvXsAJ2y72Vn@cluster0.0nsbt.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
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

app.get("/landingPage/items", async(req, res) => {
  let itemsList = await Item.find();
  res.send(itemsList);
  res.json({ success: true, message: 'Processed successfully' });
});

app.post("/landing/createItems", async(req, res) => {
  let {name, price, category}= req.query
  let createdList = await Item.create({
    name: name,
    price: price,
    category: category,
  });
});

app.post("/create/bla",async(req,res)=>{
  let createdDemo = await Item.create({
    name:"giri",
    price:"909",
    category:"shirt"
  })
  res.send(createdDemo)
})

app.get("/see", async(req,res)=>{
  let seeDemo = await Item.find({})
  res.send(seeDemo)
})

app.listen(3000, () => {
  console.log(`This server runs on 3000`);
});
