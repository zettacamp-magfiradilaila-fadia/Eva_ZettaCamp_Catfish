const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const BookModel = require('../js/book_model');
const { response } = require('express');

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

app.listen(port);
