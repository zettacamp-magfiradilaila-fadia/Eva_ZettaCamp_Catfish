const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    date_published: Date,
    price: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model('Book', bookSchema);
