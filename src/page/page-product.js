"use strict";

let Product = require("../core/product");
let discounts = [
    {userType: 'Child', maxPrice: 49, percent: 20},
    {userType: 'Boy', maxPrice: 300, percent: 50},
    {userType: 'Girl', maxPrice: 200, percent: 30}
]
class PageProduct extends Product {
    constructor(product){
        super(product)
    }
    getProduct() {
        return this._product;
    }

    getAmountAfterDiscount() {
        const price = this.getProduct().price;
        const discount = discounts.find(discount => discount.userType === this.getProduct().userType);
        if (price > discount.maxPrice) {
            return Math.round( price - (price * (discount.percent / 100)));  
        } else {
            return price;
        }
    }

}

module.exports = PageProduct;