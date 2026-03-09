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

const result = prices.map(num => num +100/10)
console.log(result);