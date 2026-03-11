//  ============== Day 8 Problem 1 ====================

const products = [
  { name: "Laptop", price: 45000 },
  { name: "Keyboard", price: 2500 },
  { name: "Headphone", price: 3500 }
];

const calculateDiscount = (price, discount) => {
  const discountAmount = price * discount / 100;
  const finalPrice = price - discountAmount;

  return finalPrice;
}

for(let product of products){
  let newPrice = calculateDiscount(product.price, 15)
  console.log( product.name + ":"+ newPrice);
}

//  ============== Day 8 Problem 2 ====================

const  getGreeting = (hour) => {
  if(hour >= 5 && hour <= 11){
    return "Good Morning!"
  }else if (hour >= 12 && hour <= 17){
   return 'Good Afternoon!';
  }else if (hour >= 18 && hour <= 21){
    return 'Good Evening!';
  }else{
    return 'Good Night! '
  }
}
console.log(getGreeting(8));  
console.log(getGreeting(14)); 
console.log(getGreeting(19)); 
console.log(getGreeting(23));