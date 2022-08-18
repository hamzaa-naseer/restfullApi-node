const mongoose = require("mongoose");
const movie = new mongoose.Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  rate: {
    type: Number,
    default: 5,
  },
  stock: {
    type: Number,
  },
});

module.exports = mongoose.model("Movie", movie);
