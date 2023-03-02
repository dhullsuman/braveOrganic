const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
    img1: {
        type: String,
        required:true,
  },
  img2: String,
  img3: String,
  img4: String,
    mainCat: {
        type: String,
        required:true,
  },
  subCat: String,
  Off: String,
    stocks: {
        type: Number,
        required:true,
  },
  title: {
    type: String,
    required: true,
  },
  bedge: String,
  desc: String,
  price: {
    type: String,
    required: true,
  },
    origionalPrice: {
        type: String,
        required: true,
  },
    rating: Number,
    qty: {
        type: Number,
        default:1
    },
    userID:String
});

const WishlistModel = mongoose.model("wishlist", wishlistSchema);

module.exports = WishlistModel;


