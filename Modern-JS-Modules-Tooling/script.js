//Importing Module
//step 1 npm i core-js 
//step 2 npm i regenerator-runtime
import 'core-js/stable'  //Polyfilling
import 'regenerator-runtime/runtime' //Polyfilling async functions


import { addToCart, cart } from "./shoppingCard.js"; //.js is important
import * as shop from './shoppingCard.js'
console.log('Importing module');

console.log(shop);
addToCart('bread', 5);

// //module pattern
// const shoppingCard2 = (function () {
//     const cart = [];
//     const shoppingCost = 10;
//     const totalPrice = 434;
//     const totalQuantity = 434;

//     addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${product} added to cart`);
//     };

//     OrderStock = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity,
//     };

// })();

// shoppingCard2.addToCart('apple', 4);

/******* CommonJS Modules */

// //export
// export.addToCart=function (product, quantity) {
//             cart.push({ product, quantity });
//             console.log(`${product} added to cart`);
//         };
// //import
// const {addToCart}=require('./shoppingCard.js')

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = [
    { product: 'pizza', quantity: 5 },
]
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);

if (module.hot) {   //Preventing  Reload of page 
    module.hot.accept()
}

class Person{
    greeting='hey'
    constructor(name){
        this.name=name;
        console.log(`hey ${name}`);
    }
}
const inder= new Person('inder');


