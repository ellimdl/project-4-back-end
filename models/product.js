const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    noOfApartment: {type: Number},
    expectedTOPYear: {type: String},
    noOfSemiDetached: {type: Number},
    street: {type: String},
    district: {type: String},
    project: {type: String},
    noOfDetachedHouse: {type: Number},
    noOfTerrace: {type: String},
    noOfCondo: {type: String},
    developerName: {type: String},
    totalUnits: {type: Number},
    img: {type: String},

    // title: { type: String, required: true, unique: true },
    // desc: { type: String, required: true },
    // img: { type: String, required: true },
    // categories: { type: Array },
    // size: { type: String },
    // color: { type: String },
    // price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
