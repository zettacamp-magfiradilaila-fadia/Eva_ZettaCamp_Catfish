function purchaseBook(book_title, percentage_discount, percentage_tax, credit_term) {
  let price = 500000;

  const amount_of_discount = (percentage_discount *= price / 100);
  console.log('Amount of Discount: ', amount_of_discount);

  const price_after_discount = price - amount_of_discount;
  console.log('Price after discount: ', price_after_discount);

  const amount_of_tax = (percentage_tax * price) / 100;
  console.log('Amount of tax: ', amount_of_tax);

  const price_after_tax = price + amount_of_tax;
  console.log('Price after tax: ', price_after_tax);

  let arrayResult;
  price / credit_term;
  const term = (price, term) => {};
  for (let i = 0; i < credit_term; i++) {
    return price / credit_term;
  }
  return arrayResult;
}

console.log(purchaseBook('Harry Potter', 20, 30, 6));
