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

// ========== Day - 10  Problem = 2 ===========

const students = [
  { name: "Mosharof", js: 80, css: 75, html: 90 },
  { name: "Rahim", js: 60, css: 55, html: 70 },
  { name: "Karim", js: 90, css: 85, html: 95 }
];

const getReport = (students) => {
    students.map((student) => {
    
    const total = student.html + student.css + student.js;
    const avg = (total / 3).toFixed(2)

    let  average = '';
    if(avg >= 70){
        average = "Pass"
    }else{
        average = "Fail"
    }

    console.log(`${student.name} — Average: ${avg} — ${average}`);
})
}
     
getReport(students)