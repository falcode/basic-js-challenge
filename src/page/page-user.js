"use strict";

let User = require("../core/user");

class PageUser extends User {
    constructor(user){
        super(user)
    }

    getUser() {
        return this._type;
    }
}

module.exports = PageUser;