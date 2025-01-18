const express = require("express");
const mongoose = require("mongoose");

const app = express();
// mongodb+srv://innov8turegroupco:innov8turegroupco@ceeclothing.tupuo.mongodb.net/

mongoose
  .connect(
    "mongodb+srv://innov8turegroupco:JbqNbrjDR6nst6dr@ceeclothing.tupuo.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");

    const items = mongoose.model("items",{
        
    })
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/landingPage/items", (req, res) => {});
app.listen(3000, () => {
  console.log(`This server runs on 3000`);
});
