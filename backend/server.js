// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Card = require("./models/Card");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/carddb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.post("/cards", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

//get Cards
app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get card by title
app.get("/cards/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({
        message: "Card not found",
      });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
