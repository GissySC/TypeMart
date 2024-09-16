import products from './products';

const productName: string = 'fanny pack';

const product = products.filter(product => {
  return product.name === productName
})[0];

console.log(product);

if (product) {
  if (Boolean(product.preOrder) === true) {
  console.log('We will send you a message when your product is on its way.');
  }
}
