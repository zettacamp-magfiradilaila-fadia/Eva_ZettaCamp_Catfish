const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookshelfSchema = new Schema(
  {
    name: { type: String },
    book_list: [
      {
        book_ids: { type: Schema.ObjectId, ref: 'books' },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model('Bookshelf', bookshelfSchema);
