const songLists = [
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
    artist: 'LArcEn~Ciel',
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

function songDuration() {
  let result = [];
  let duration = 0;
  //   for (i = 0; i < songLists.length; i++) {
  //     console.log(i);
  //     if (songLists.duration < 60) {
  //       result.push({
  //         artist: songLists.artist,
  //         genre: songLists.genre,
  //       });
  //     }
  //   }
  for (const songList of songLists) {
    // cari index random
    // dari index itu nyari lagunya udah ada belum di result nya
    // kalo misal udah ada, jangan dipush
    if (duration < 60) {
      result.push(songList);
      duration += songList.duration;
    }
  }
  console.log(duration);
  //   console.log(songLists.length);
  //   console.log(songLists.duration);
  //   console.log(songLists[0]);
  console.log(result.length);
  return result;
}
// console.log(songDuration());

// const songArtist = (song, artist) => {
//     return song.filter(artist => artist);
// }
function songArtist(songParameter, artist) {
  const artistName = songParameter.filter(function (song) {
    return song.artist === artist;
  });
  return artistName;
}

function songArtist(songParameter, artist) {
  const artistName = songParameter.filter((song) => song.artist === artist);
  return artistName;
}

console.log(songArtist(songLists, 'Yuki Kajiura'));
