const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your book name!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your book description!"],
  },
  category: {
    type: String,
    required: [true, "Please enter your book category!"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter your book stock!"],
  },
  author: {
    type: String,
    required: [true, "Please enter the author of the book"],
  },
  publisher: {
    type: String,
    required: [true, "Please enter the Publisher of the book"],
  },
  isbn: {
    type: Number,
    required: [true, "Please enter the ISBN number of the book"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      productId: {
        type: String,
      },
      createdAt:{
        type: Date,
        default: Date.now(),
      }
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  no_read: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
