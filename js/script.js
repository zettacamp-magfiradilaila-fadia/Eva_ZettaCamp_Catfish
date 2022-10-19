const express = require('express');
const app = express();
const port = 8000;

app.get('/bookPurchase', function (req, res) {
  const auth = req.headers['authorization'];
  let { book_title, percentage_discount, percentage_tax, credit_term } = req.query;
  console.log(book_title, percentage_discount, percentage_tax, credit_term);

  const userpass = auth.split(' ')[1];
  //console.log(userpass);

  const text = Buffer.from(userpass, 'base64').toString('ascii');
  //console.log(text);

  const username = text.split(':')[0];
  const password = text.split(':')[1];
  //console.log(username);
  //console.log(password);

  if (username == 'firafadia28' && password == 'justfira28') {
    let result = purchaseBook(book_title, percentage_discount, percentage_tax, credit_term);

    res.send(result);
  } else {
    throw new Error('Invalid username and password');
  }
});

app.get('/async-bookPurchase', async (req, res) => {
  const timeout = setTimeout(() => {
    console.log('Done');
  }, 3000);
  const result = await calculatePriceTerm();
  console.log(result);
  console.log('Async is done');
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

  /*let arrayResult = [];
  var total = price / credit_term;
  for (let i = 1; i <= credit_term; i++) {
    arrayResult.push({
      price: total,
      month: i,
    });
  }
  return arrayResult;*/
}

async function bookPurchase(credit_term, additional_term) {
  let arrayResult = [];
  var total = price / credit_term;
  var totalPriceTerm = total + additional_term;
  for (let i = 1; i <= credit_term; i++) {
    arrayResult.push({
      price: total,
      month: i,
    });
  }
  return arrayResult;
}
