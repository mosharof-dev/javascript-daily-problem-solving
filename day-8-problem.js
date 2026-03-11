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