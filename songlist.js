const mongoose = require('mongoose');
const songSchema = new mongoose.Schema(
  {
    title: { type: String },
    artist: [{ type: String }],
    genre: [{ type: String }],
    duration: { type: Number },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Song', songSchema);
