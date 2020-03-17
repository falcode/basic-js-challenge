"use strict";

let PageProduct = require("../src/page/page-product");
let assert = require("assert");

let product1 = new PageProduct({product: 'Laptop', userType: 'Girl', price: 1000});
let product2 = new PageProduct({product: 'Laptop', userType: 'Boy', price: 1000});

assert(product1.getProduct().price === 1000, "Unexpected result for get product");
console.log('Product exist succeded');

assert(product1.getAmountAfterDiscount() === 700, "Unexpected result for Girl discount");
console.log('Girl discount succeded');

assert(product2.getAmountAfterDiscount() === 500, "Unexpected result for Boy discount");
console.log('Boy discount succeded');