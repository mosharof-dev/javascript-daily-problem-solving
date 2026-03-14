const votes = ["yes", "no", "yes", "yes", "no", "yes", "no"];

let yesCount = 0;
let noCount = 0;

for(let i =0 ; i < votes.length; i++){ 
    if(votes[i ] === "yes" ){
       yesCount ++;
      
    }else if (votes[i] === "no") {
        noCount++;
    }
  
}
console.log("Total Yes:", yesCount);
console.log("Total No:", noCount);


// ============ Problem 2 =========
const products = [
  { name: "Laptop", price: 45000, inStock: true },
  { name: "Mouse", price: 800, inStock: false },
  { name: "Keyboard", price: 2500, inStock: true },
  { name: "Monitor", price: 18000, inStock: false },
  { name: "Headphone", price: 3500, inStock: true }
];

let availableProducts = [];

for(let i of products){
    if(i.inStock  === true){
        availableProducts.push(i)
    }
}
console.log(availableProducts);