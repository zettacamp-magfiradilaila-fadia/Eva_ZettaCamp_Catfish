const express = require('express');
const app = express();
const port = 8000;

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
