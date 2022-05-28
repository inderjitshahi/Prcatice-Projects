//Exporting Module
console.log('Exporting module');

const shoppingCost=10;
const cart=[];

export const addToCart=function(product,quantity){
    cart.push({product,quantity});
    console.log(`${product} added to cart`);
};

export {shoppingCost,cart};

// export default addToCart=function(product,quantity){
//     cart.push({product,quantity});
//     console.log(`${product} added to cart`);
// };