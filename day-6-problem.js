// =========== Problem 1 ======================


const students = [
  { name: "Mosharof", marks: 85 },
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 72 },
  { name: "Sumon", marks: 38 },
  { name: "Hasan", marks: 90 }
];


const passStudent = students.filter(pass => {
    return pass.marks >= 50 ;
});
console.log(passStudent);



//  ================ Problem 2 ========================
const prices = [100, 200, 300, 400, 500];

const result = prices.map(num => num +(num * 10/100))
console.log(result);

// problem 3 

const num = [ 400, 500, 50, 70];
const odd = num.map(num => num - (num * 50/100))
console.log(odd);