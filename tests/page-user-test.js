"use strict";
let PageUser = require("../src/page/page-user");
let assert = require("assert");

let exist = new PageUser('Child');
assert(exist.getUser() === 'Child', "Unexpected result ") 
console.log("Boy assertion succeed!");

exist = new PageUser('Girl');
assert(exist.getUser() === 'Girl', "Unexpected result ") 
console.log("Girl assertion succeed!");

exist = new PageUser('Boy');
assert(exist.getUser() === 'Boy', "Unexpected result ") 
console.log("Boy assertion succeed!");