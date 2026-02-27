// Ei array er sob numbers add kore 
// total price print koro


const prices = [120, 450, 80, 320, 95];

let totalPrice = 0;

for(let i = 0; i < prices.length; i++){
    totalPrice = totalPrice + prices[i];
}
console.log("Total Price : ", totalPrice);


