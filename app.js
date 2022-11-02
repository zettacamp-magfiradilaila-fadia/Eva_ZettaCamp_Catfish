const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const SongModel = require('./songlist');
const PlaylistModel = require('./playlist');
const bodyParser = require('body-parser');

//----- CONNECT DATABASE -----//
var myDB = 'mongodb://localhost:27017/';
mongoose.connect(myDB);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connection Successful!');
});
//---------------------------//
app.listen(port);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//---------------------------//

//------ SONG LIST ------//
app.get('/save-song', async (req, res) => {
  var songList = [
    {
      title: 'Invoke',
      artist: 'T.M. Revolution',
      genre: ['R&B', 'Soul', 'J-Pop', 'Anime'],
      duration: 4,
    },

    {
      title: 'Forever...',
      artist: 'savage genius',
      genre: ['R&B', 'Soul', 'J-Pop', 'Anime'],
      duration: 5,
    },

    {
      title: 'sand dream',
      artist: 'Yuki Kajiura',
      genre: 'J-Pop',
      duration: 7,
    },

    {
      title: 'only my railgun',
      artist: 'fripSide',
      genre: ['J-Pop', 'Anime', 'Electronic'],
      duration: 4,
    },

    {
      title: 'Apple is A',
      artist: 'T-ARA',
      genre: ['K-Pop', 'Pop'],
      duration: 3,
    },

    {
      title: 'This Love',
      artist: 'Angela Aki',
      genre: ['J-Pop', 'Pop'],
      duration: 5,
    },

    {
      title: 'Real Emotion',
      artist: 'Kumi Koda',
      genre: ['J-Pop', 'Pop'],
      duration: 4,
    },

    {
      title: '1000 Words',
      artist: 'Kumi Koda',
      genre: ['J-Pop', 'Pop', 'Ballad'],
      duration: 6,
    },

    {
      title: 'dawn of infinity',
      artist: 'fripSide',
      genre: ['J-Pop', 'Electronic'],
      duration: 5,
    },

    {
      title: 'TruE',
      artist: ['HOYO-MiX', 'Isabelle Huang'],
      genre: ['R&B', 'Soul', 'Electronic'],
      duration: 3,
    },

    {
      title: 'Rubia',
      artist: ['HOYO-MiX', 'Zhou Shen'],
      genre: 'Pop',
      duration: 3,
    },

    {
      title: 'Moon Halo',
      artist: ['HOYO-MiX', 'Hanser', 'TetraCalyx'],
      genre: 'Anime',
      duration: 3,
    },

    {
      title: 'Regression',
      artist: ['HOYO-MiX', 'Ayunga'],
      genre: ['Pop', 'Anime'],
      duration: 4,
    },

    {
      title: 'My Love',
      artist: 'Westlife',
      genre: ['Pop', 'R&B', 'Soul'],
      duration: 4,
    },

    {
      title: 'I Lay My Love On You',
      artist: 'Westlife',
      genre: ['Pop', 'R&B', 'Soul'],
      duration: 3,
    },

    {
      title: 'Uptown Girl',
      artist: 'Westlife',
      genre: 'Pop',
      duration: 3,
    },

    {
      title: 'Tactics',
      artist: 'The Yellow Monkey',
      genre: ['Rock', 'Anime', 'J-Rock'],
      duration: 4,
    },

    {
      title: '4th Avenue Cafe',
      artist: 'L~Arc~En~Ciel',
      genre: ['Rock', 'Anime', 'J-Rock'],
      duration: 5,
    },

    {
      title: 'Heart of Sword',
      artist: 'T.M. Revolution',
      genre: ['J-Pop', 'J-Rock', 'Anime', 'Rock', 'Pop'],
      duration: 4,
    },

    {
      title: 'Last Love',
      artist: 'Red Velvet',
      genre: ['K-Pop', 'Ballad', 'Pop'],
      duration: 5,
    },

    {
      title: 'One of These Nights',
      artist: 'Red Velvet',
      genre: ['K-Pop', 'Ballad', 'R&B'],
      duration: 4,
    },

    {
      title: 'Home',
      artist: 'Michael Bubble',
      genre: ['Pop', 'R&B'],
      duration: 4,
    },

    {
      title: 'Melodies of Life',
      artist: 'Emiko Shiratori',
      genre: ['J-Pop', 'Pop', 'Ballad', 'Rock'],
      duration: 7,
    },

    {
      title: 'Sugar Free',
      artist: 'T-ARA',
      genre: ['K-Pop', 'Electronic', 'EDM'],
      duration: 4,
    },

    {
      title: 'Bo Peep Bo Peep',
      artist: 'T-ARA',
      genre: ['K-Pop', 'Electronic', 'EDM', 'Pop'],
      duration: 4,
    },

    {
      title: 'Day by Day',
      artist: 'T-ARA',
      genre: ['K-Pop', 'Synthpop', 'Pop'],
      duration: 3,
    },

    {
      title: 'Number 9',
      artist: 'T-ARA',
      genre: ['K-Pop', 'Synthpop', 'Pop', 'Electronic'],
      duration: 4,
    },

    {
      title: 'Sayonara no Wakusei',
      artist: 'Yoshino Nanjo',
      genre: 'J-Pop',
      duration: 4,
    },
  ];
  const result = await SongModel.insertMany(songList);
  console.log(result);
  res.send(result);
});

app.post('/insert-song', async (req, res) => {
  const { title, artist, genre, duration } = req.query;
  const newSong = new SongModel({
    title: title,
    artist: [artist],
    genre: [genre],
    duration: duration,
  });
  const result = await newSong.save();
  console.log(result);
  res.send(result);
});

app.get('/get-all-song', async (req, res) => {
  const result = await SongModel.find();
  console.log(result);
  res.send(result);
});

app.get('/get-one-song', async (req, res) => {
  const { title } = req.query;
  const result = await SongModel.findOne({
    title: title,
  });
  console.log(result);
  res.send(result);
});

/*app.get('/update-song', async (req, res) => {
  const result = await SongModel.updateOne({ title: 'Tactics' }, { $set: { title: 'GO', artist: 'Flow' } });
  console.log(result);
  res.send(result);
});*/

app.put('/update-song-2/:id', async (req, res) => {
  const result = await SongModel.findOneAndUpdate({ _id: req.params.id }, { $set: { title: req.body.title, artist: req.body.artist } });
  console.log(result);
  res.send(result);
});

app.delete('/delete-song', async (req, res) => {
  const { title } = req.query;
  const result = await SongModel.deleteOne({ title: title });
  console.log(result);
  res.send(result);
});

//------ PLAYLIST ------//
app.post('/insert-playlist', async (req, res) => {
  const { playlist_name } = req.query;
  const result = await PlaylistModel.save({
    playlist_name: playlist_name,
    songs_id: [mongoose.Types.ObjectId()],
  });
  console.log(result);
  res.send(result);
});

app.get('/insert-playlist-2', async (req, res) => {
  const playlist = [
    { playlist_name: 'Playlist 1', songs_id: [mongoose.Types.ObjectId('6360a5d758abfe59d2ba0db9'), mongoose.Types.ObjectId('6360a5d758abfe59d2ba0dbc'), mongoose.Types.ObjectId('6360a5d758abfe59d2ba0dc1')] },
    { playlist_name: 'Playlist 2', songs_id: [mongoose.Types.ObjectId('6360a5d758abfe59d2ba0dbd'), mongoose.Types.ObjectId('6360a5d758abfe59d2ba0dbe'), mongoose.Types.ObjectId('6360a5d758abfe59d2ba0dd0')] },
  ];
  const result = await PlaylistModel.insertMany(playlist);
  console.log(result);
  res.send(result);
});

app.get('/find-all-playlist', async (req, res) => {
  const result = await PlaylistModel.find();
  console.log(result);
  res.send(result);
});

app.get('/find-one', async (req, res) => {
  const { songs_id } = req.query;
  const result = await PlaylistModel.findOne({
    songs_id: mongoose.Types.ObjectId('6360a5d758abfe59d2ba0dbe'),
  });
  console.log(result);
  res.send(result);
});

app.put('/update-playlist/:playlist_name', async (req, res) => {
  const result = await PlaylistModel.updateOne({ playlist_name: req.params.playlist_name }, { $set: { songs_id: [mongoose.Types.ObjectId()] } });
  console.log(result);
  res.send(result);
});

app.delete('/delete-playlist', async (req, res) => {
  const { playlist_name } = req.query;
  const result = await PlaylistModel.deleteOne({
    playlist_name: playlist_name,
  });
  console.log(result);
  res.send(result);
});

//------ AGGREGATION ------//
app.get('/aggregate-song', async (req, res) => {
  console.log(req);
  const result = await SongModel.aggregate([
    {
      $match: { genre: req.query.genre },
    },
    { $sort: { genre: +req.query.sort } },
    { $limit: +req.query.limit },
    { $skip: +req.query.skip * +req.query.limit },
  ]);
  console.log(result);
  res.send(result);
});

app.get('/aggregate-song-2', async (req, res) => {
  const result = await SongModel.aggregate([
    {
      $facet: {
        categorizedByGenre: [{ $group: { _id: '$genre' } }, { $sort: { genre: 1 } }, { $limit: 10 }, { $skip: 1 }],
      },
    },
  ]);
  console.log(result);
  res.send(result);
});
