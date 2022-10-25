const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Book = require('../js/book_model');
const { response } = require('express');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/bookPurchase', function (req, res) {
  const auth = req.headers['authorization'];
  let { book_title, percentage_discount, percentage_tax, credit_term, additional_term } = req.query;
  //console.log(book_title, percentage_discount, percentage_tax, credit_term, additional_term);

  const userpass = auth.split(' ')[1];
  //console.log(userpass);

  const text = Buffer.from(userpass, 'base64').toString('ascii');
  //console.log(text);

  const username = text.split(':')[0];
  const password = text.split(':')[1];
  //console.log(username);
  //console.log(password);

  if (username == 'firafadia28' && password == 'justfira28') {
    let result = purchaseBook(book_title, percentage_discount, percentage_tax, credit_term, additional_term);

    res.send(result);
  } else {
    throw new Error('Invalid username and password');
  }
});

app.get('/async-bookPurchase', async (req, res) => {
  let result_2 = bookPurchase(6, 2000);
  const result = await calculatePriceTerm(6, 2000);
  console.log(result_2);
  console.log('Async is done');
  result_2.then((param) => {
    console.log(param);
  });
});

app.get('/no-await', (req, res) => {});

app.get('/await', (req, res) => {
  res.send(readFileDataAwait('./lorem.txt'));
});

app.get('/set', (req, res) => {
  const bookSet = new Set(['Harry Potter', 'Percy Jackson', 'Da Vinci Code', 'The Kane Chronicles', 'Lord of The Rings']);
  //console.log(bookSet);
  res.send(...bookSet);
});

app.get('/map', (req, res) => {
  const bookMap = new Map([
    ['book_1', 'Eragon'],
    ['book_2', 'Frozen'],
    ['book_3', 'Tintin'],
    ['book_4', 'Apollo'],
    ['book_5', 'Osas'],
  ]);
  //console.log(animalMap);
  let text;
  bookMap.forEach(function (value, key) {
    text += key + ': ' + value;
  });
  res.send(...bookMap);
});

app.get('/books', (req, res) => {
  console.log('Getting books');
  Book.find({}).exec((err, books) => {
    if (err) {
      res.send('Error has occured');
    } else {
      console.log(books);
    }
  });
});

app.get('/books/:id', (req, res) => {
  console.log('Getting one book');
  Book.findOne({
    _id: req.params.id,
  }).exec(function (err, book) {
    if (err) {
      res.send('Error occurred');
    } else {
      console.log(book);
    }
  });
});

app.post('/books', function (req, res) {
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.date_published = req.body.date_published;
  newBook.price = req.body.price;
  newBook.created_at = req.body.created_at;
  newBook.updated_at = req.body.updated_at;

  newBook.save((err, book) => {
    if (err) {
      res.send('Error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  });
});

app.put('/book:id', (req, res) => {
  Book.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: { title: req.body.title } },
    (err, newBook) => {
      if (err) {
        console.log('Error occured');
      } else {
        console.log(newBook);
        res.send(newBook);
      }
    }
  );
});

app.delete('/book/:id', (req, res) => {
  Book.findOneAndRemove(
    {
      _id: req.params.id,
    },
    (err, book) => {
      if (err) {
        res.send('Error deleting book');
      } else {
        console.log(book);
        res.send(book);
      }
    }
  );
});

app.listen(port);
function purchaseBook(book_title, percentage_discount, percentage_tax, credit_term, additional_term) {
  let price = 500000;

  const amount_of_discount = (percentage_discount *= price / 100);
  console.log('Amount of Discount: ', amount_of_discount);

  const price_after_discount = price - amount_of_discount;
  console.log('Price after discount: ', price_after_discount);

  const amount_of_tax = (percentage_tax * price) / 100;
  console.log('Amount of tax: ', amount_of_tax);

  const price_after_tax = price + amount_of_tax;
  console.log('Price after tax: ', price_after_tax);

  let arrayResult = [];
  var total = price / credit_term;
  var totalPerTerm = total + additional_term;
  for (i = 0; i <= credit_term; i++) {
    if (i === 3) {
      let resultTerm = calculatePriceTerm(total, additional_term);
      console.log(resultTerm);
      console.log(total);
      console.log(additional_term);
    }
    arrayResult.push({
      price: total,
      month: i,
    });
  }

  /*for (let i = 1; i <= credit_term; i++) {
    arrayResult.push({
      price: total,
      month: i,
    });
  }*/
  return arrayResult;
}

async function bookPurchase(credit_term, additional_term) {
  var totalPerTerm = credit_term + additional_term;
  var result;
  for (i = 0; i <= credit_term; i++) {
    if (i === 3) {
      result = await calculatePriceTerm(totalPerTerm, 2000);
    }
  }
  return result;
}

function calculatePriceTerm(priceCredit, additionalTerm) {
  let term = additionalTerm + priceCredit;

  return term;
}

/*const fs = require('fs').promises;
function readDataFile(fileName) {
  const result = fs.readFile(fileName, 'utf8').catch(function (err) {
    return err;
  });
  return result;
}
const dataFile = readDataFile('./lorem.txt');
console.log(dataFile);

const readFileData = (dataPromise) => {
  console.log(dataPromise);
  const result = dataPromise.then((data) => console.log(data));
};

console.log(dataFile);
readFileData(dataFile);

const readFileDataAwait = async (fileName) => {
  const result = await readDataFile(fileName);
  console.log(result);
};

readFileDataAwait('./lorem.txt');

const events = require('events');
const eventEmitter = new events.EventEmitter();
//console.log(eventEmitter);

//eventEmitter.on('afterText', readDataFile);
//eventEmitter.on('read await', readFileDataAwait);
//eventEmitter.on('read await', './lorem.txt');*/

var myDB = 'mongodb://localhost:27017/';
mongoose.connect(myDB);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connection Successful!');
});
