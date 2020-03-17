"use strict";

let PageCatalog = require("../src/page/page-catalog");
let PageUser = require("../src/page/page-user");
let assert = require("assert");

let catalog = new PageCatalog(new PageUser('Girl'));
assert(catalog.getProductsLimit() === 3, "Unexpected result getting Products Limit in catalog");
console.log("Product Limit in catalog succeed!");

assert(catalog.getUserSection() === 'Girl', "Unexpected result for Child catalog");
console.log("Girl assertion succeed!");

assert(!catalog.getProducts().isEmpty(), "Unexpected result for catalog length");
console.log("Catalog contains products for Girl succeded!");

catalog = new PageCatalog('NonExist');
assert(catalog.getProducts().isEmpty(), "Unexpected result for catalog length");
console.log("Catalog doesn't contains products for NonExist succeded!");
