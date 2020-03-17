"use strict";

let Catalog = require("../core/catalog");
let ProductCollection = require('../product-collection');
let ProductPage = require('../page/page-product');
let catalog = [
    {product: 'Laptop', userType: ['Boy','Girl'], price: 1000},
    {product: 'PS5', userType: ['Boy','Child'], price: 400},
    {product: 'Tablet', userType: ['Boy','Girl'], price: 300},
    {product: 'Móvil', userType: ['Boy','Girl'], price: 220},
    {product: 'Kit Lego', userType: ['Child'], price: 140},
    {product: 'Deportivas', userType: ['Boy','Girl','Child'], price: 120},
    {product: 'Falda', userType: ['Girl'], price: 60},
    {product: 'Gorra', userType: ['Child', 'Boy'], price: 50},
    {product: 'Camisa', userType: ['Boy'], price: 40},
    {product: 'Canicas', userType: ['Child','Boy'], price: 5},
];

class PageCatalog extends Catalog {
    constructor(user){
        super(user);
        
    }
    /**
     * @returns ProductCollection
     */
    getProducts() {
        let productList = catalog.filter(product => product.userType.some(user => user === this.getUserSection()))
            .map(product => new ProductPage({...product, userType: this.getUserSection()}));

        while (productList.length > this.getProductsLimit()) { 
            let minValueProduct = Math.min(...productList.map(product => product.getAmountAfterDiscount()));
            productList.splice(productList.indexOf(productList.find(product => product.getAmountAfterDiscount() === minValueProduct)), 1);
        }
        return new ProductCollection(productList);
    }
    getUserSection() {
        return this._user._type;
    }
    getProductsLimit() {
        return this._productsLimit;
    }
}

module.exports = PageCatalog;