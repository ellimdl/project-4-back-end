const { Product } = require("../models");
const httpStatus = require("http-status");

// Add new product (POST)
const create = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Find all products (GET)
const findAll = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Find one product via ID (GET)
const findOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Update one product via ID (PUT)
const updateOne = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

// Delete one product via ID (DELETE)
const deleteOne = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (e) {
    console.error(e);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
};
