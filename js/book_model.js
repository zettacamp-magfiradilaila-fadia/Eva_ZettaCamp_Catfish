const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    date_published: { type: String },
    price: { type: Number },
  },
  { timestamp: true }
);
module.exports = mongoose.model('Book', bookSchema);
