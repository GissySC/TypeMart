"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const productName = 'tote bag';
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = '575 Broadway, Houston, Texas';
const product = products_1.default.filter(product => {
    return product.name === productName;
})[0];
console.log(product);
if (product) {
    if (product.preOrder === true) {
        console.log('We will send you a message when your product is on its way.');
    }
}
;
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log('Your shipping is free :)');
}
else {
    shipping = 5;
}
;
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(`Product name: ${productName}
    Shipping address: ${shippingAddress}
    Price of the product: ${product.price}
    Tax total: ${taxTotal}
    Shipping: ${shipping}
    Total amount: ${total}`);
