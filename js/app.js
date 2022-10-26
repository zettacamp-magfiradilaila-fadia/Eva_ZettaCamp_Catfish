const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
//const BookModel = require('../js/book_model');
const { response } = require('express');
//const bodyParser = require('body-parser');

var myDB = 'mongodb://localhost:27017/';
mongoose.connect(myDB);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connection Successful!');
});

/*app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);*/

//------------------------------ DAY 1 ------------------------------
/*app.get('/save-book', (req, res) => {
  const bookList = [
    { title: 'Percy Jackson and The Olympians : The Lightning Thief', author: 'Rick Riordan', date_published: '28/06/2005', price: 85000 },
    { title: 'Percy Jackson and The Olympians : The Sea Monsters', author: 'Rick Riordan', date_published: '01/04/2006', price: 85000 },
    { title: 'Percy Jackson and The Olympians : The Titans Curse', author: 'Rick Riordan', date_published: '11/05/2007', price: 85000 },
    { title: 'Percy Jackson and The Olympians : The Battle of Labyrinth', author: 'Rick Riordan', date_published: '06/05/2008', price: 85000 },
    { title: 'Percy Jackson and The Olympians : The Last Olympian', author: 'Rick Riordan', date_published: '05/05/2009', price: 85000 },
    { title: 'The Kane Chronicles : The Red Pyramid', author: 'Rick Riordan', date_published: '04/05/2010', price: 90000 },
    { title: 'The Kane Chronicles : The Throne of Fire', author: 'Rick Riordan', date_published: '04/05/2011', price: 90000 },
    { title: 'The Kane Chronicles : The Serpent Shadow', author: 'Rick Riordan', date_published: '01/05/2012', price: 90000 },
    { title: 'The Heroes of Olympus : The Lost Hero', author: 'Rick Riordan', date_published: '12/10/2010', price: 95000 },
    { title: 'The Heroes of Olympus : The Son of Neptune', author: 'Rick Riordan', date_published: '04/10/2011', price: 95000 },
    { title: 'The Heroes of Olympus : The Mark of Athena', author: 'Rick Riordan', date_published: '02/10/2012', price: 95000 },
    { title: 'The Heroes of Olympus : The House of Hades', author: 'Rick Riordan', date_published: '08/10/2013', price: 95000 },
    { title: 'The Heroes of Olympus : The Blood of Olympus', author: 'Rick Riordan', date_published: '07/10/2014', price: 95000 },
    { title: 'The Trials of Apollo : The Hidden Oracle', author: 'Rick Riordan', date_published: '03/05/2016', price: 90000 },
    { title: 'The Trials of Apollo : The Dark Prophecy', author: 'Rick Riordan', date_published: '02/05/2017', price: 90000 },
    { title: 'The Trials of Apollo : The Burning Maze', author: 'Rick Riordan', date_published: '01/05/2018', price: 90000 },
    { title: 'The Trials of Apollo : The Tyrants Tomb', author: 'Rick Riordan', date_published: '24/09/2019', price: 90000 },
    { title: 'The Trials of Apollo : The Tower of Nero', author: 'Rick Riordan', date_published: '06/10/2020', price: 90000 },
    { title: 'Magnus Chase and the Gods of Asgard : The Sword of Summer', author: 'Rick Riordan', date_published: '06/10/2015', price: 100000 },
    { title: 'Magnus Chase and the Gods of Asgard : The Hammer of Thor', author: 'Rick Riordan', date_published: '04/10/2016', price: 100000 },
    { title: 'Magnus Chase and the Gods of Asgard : The Ship of The Dead', author: 'Rick Riordan', date_published: '03/10/2017', price: 100000 },
  ];
  const result = bookList.save();
  res.send(result);
});*/

app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(port);
