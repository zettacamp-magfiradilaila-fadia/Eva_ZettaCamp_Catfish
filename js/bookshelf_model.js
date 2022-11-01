const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookshelfSchema = new Schema(
  {
    name: { type: String },
    book_ids: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true }
);
module.exports = mongoose.model('Bookshelf', bookshelfSchema);
