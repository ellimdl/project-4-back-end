const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// }

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
app.listen(5001, () => {
  console.log("Listening for requests...");
});

// connectDB().then(() => {
//   console.log("db connected");
//   app.listen(process.env.PORT, () => {
//     console.log("Listening for requests...");
//   })
// });