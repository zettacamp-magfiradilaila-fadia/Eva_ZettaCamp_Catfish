const mongoose = require('mongoose');
const playlistSchema = new mongoose.Schema(
  {
    playlist_name: { type: String },
    songs_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  },
  { timestamps: true }
);
module.exports = mongoose.model('Playlist', playlistSchema);
