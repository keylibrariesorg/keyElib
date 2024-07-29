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
  ISBN: {
    type: Number,
    required: [true, "Enter the ISBN number of the book!"],
    validate: {
      validator: function(v) {
        return /^\d{13}$/.test(v.toString());
      },
      message: props => `${props.value} is not a valid 13-digit ISBN number!`
    }
  },
  stock: {
    type: Number,
    required: [true, "Please enter your book stock!"],
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
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
