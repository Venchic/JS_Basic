'use strict';

/**
 *   Task 1
 **/
console.log('\n----- Task 1 -----');
for (let index = 0; index <= 10; index++) {
    if (index == 0) {
        console.log(index + ' - это ноль');
    } else if (index % 2) {
        console.log(index + ' - это нечетное число');
    } else {
        console.log(index + ' - это четное число');
    }
}

/**
 *   Task 2
 **/
console.log('\n----- Task 2 -----');
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

/**
 *   Task 3
 **/
console.log('\n----- Task 3 -----');
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => {
    console.log(product.price = product.price - product.price * 15 / 100);
});

/**
 *   Task 4
 **/
console.log('\n----- Task 4 -----');
const products5 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const photoIsThere = products5.filter(photo => "photos" in photo && photo.photos.length > 0)
console.log(photoIsThere);

const sortedPrice = products5.sort(function compirePrices(a, b) {
    return a.price - b.price;
});
console.log(sortedPrice);

/**
 *   Task 5
 **/
console.log('\n----- Task 5 -----');
for (let index = 0; index <= 9; console.log(index++));

/**
 *   Task 6
 **/
console.log('\n----- Task 6 -----');
for (let index = 'x'; index.length <= 20; index += 'x') {
    console.log(index);
}