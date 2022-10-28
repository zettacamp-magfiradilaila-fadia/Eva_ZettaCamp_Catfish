const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: { type: String },
    author: { type: String },
    date_published: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Book', bookSchema);
