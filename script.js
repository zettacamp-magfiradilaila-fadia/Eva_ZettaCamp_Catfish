function purchaseBook(book_title, percentage_discount, percentage_tax, amount_stock, amount_purchased) {
  let price = 500000;
  var total;

  const amount_of_discount = (percentage_discount *= price / 100);
  console.log('Amount of Discount: ', amount_of_discount);

  const price_after_discount = price - amount_of_discount;
  console.log('Price after discount: ', price_after_discount);

  const amount_of_tax = (percentage_tax * price) / 100;
  console.log('Amount of tax: ', amount_of_tax);

  const price_after_tax = price + amount_of_tax;
  console.log('Price after tax: ', price_after_tax);

  for (let i = 0; i < amount_stock; i++) {
    if (amount_purchased > amount_stock) {
      break;
    } else {
      total = price * amount_purchased;
    }
  }
  console.log('Total : ', total);
  console.log('This book can be purchased');
}

console.log(purchaseBook('Harry Potter', 20, 30, 60, 3));
