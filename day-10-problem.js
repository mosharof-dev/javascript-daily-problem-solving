// ========== Day - 10  Problem = 1 ===========

const orders = [
  { product: "Laptop", price: 45000 },
  { product: "Mouse", price: 800 },
  { product: "Keyboard", price: 2500 },
  { product: "Headphone", price: 3500 }
];

const totalCost = orders.reduce((accumulator, current) => {
    return accumulator + current.price;
}, 0) ;
console.log("TotalCost:", totalCost );