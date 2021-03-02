/*
*   Task 1.1
*/
'use strict';

class Product {
    
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}

let productItem = new Product('Phone', 980);
console.log('ProductItem Price = ' + productItem.price);

productItem.make25PercentDiscount();
console.log('productItem - 25% = ' + productItem.price);


function product (name, price) {
    this.name = name;
    this.price = price;

    product.prototype.make25PercentDiscount = function () {
        this.price = this.price - (this.price * 25 / 100);
    }
}

let productItem2 = new product('laptop', 1800);
console.log('productItem2 = ' + productItem2);

productItem2.make25PercentDiscount();
console.log('productItem2 - 25% = ' + productItem2.price);


/**
*   Task 1.2
**/

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    
    highlighted = false;
    
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let news1 = new Post('Ogarev', 'Lorem Ipsum', '1999.02.10');

let news2 = new AttachedPost('Filatova', 'Lorem Ipsum 2', '2003.10.18');
console.log(news2);

news2.makeTextHighlighted()
console.log(news2);