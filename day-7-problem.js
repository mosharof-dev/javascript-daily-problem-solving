const products = [
  { name: "Laptop", price: 45000, inStock: true },
  { name: "Mouse", price: 800, inStock: false },
  { name: "Keyboard", price: 2500, inStock: true },
  { name: "Monitor", price: 18000, inStock: false },
  { name: "Headphone", price: 3500, inStock: true }
];


const product = products.filter(item => item.inStock === true)
.map(item => ({
    ...item, 
    price: item.price - (item.price * 10/100)
}))
console.log(product);