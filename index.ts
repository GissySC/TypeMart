import products from './products';

const productName: string = 'tote bag';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '575 Broadway, New York City';
const product = products.filter(product => {
  return product.name === productName
})[0];

console.log(product);

if (product) {
  if (product.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
  }
};

if (Number(product.price) >= 25 ) {
  shipping = 0;
  console.log('Your shipping is free :)') 
  } else {
    shipping = 5;
  };

  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  };

  taxTotal = Number(product.price) * taxPercent;
  total = Number(product.price)+ taxTotal + shipping;

  console.log(
    `Product name: ${productName}
    Shipping address: ${shippingAddress}
    Price of the product: ${product.price}
    Tax total: ${taxTotal}
    Shipping: ${shipping}
    Total amount: ${total}`
  );