const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const {
  create: createProduct,
  findAll: findAllProduct,
  findOne: findOneProduct,
  updateOne: updateOneProduct,
  deleteOne: deleteOneProduct,
} = require("../controllers/product-controller");

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints
app.post("/products", createProduct);
app.get("/products", findAllProduct);
app.get("/products/:id", findOneProduct);
app.put("/products/:id", updateOneProduct);
app.delete("/products/:id", deleteOneProduct);

// Start server

connectDB().then(() => {
  console.log("db connected");
  app.listen(port, () => {
    console.log("Listening for requests...");
  })
});

// app.listen(5001, () => {
//   console.log("Listening for requests...");
// });