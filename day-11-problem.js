// ======== Problem 1 — reduce() Practice===========

const students = [
  { name: "Mosharof", marks: 85 },
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 72 },
  { name: "Sumon", marks: 38 },
  { name: "Hasan", marks: 90 }
];

const totalMarks = students.reduce((accumulator, current)=>{
   const totalMark = accumulator + current.marks;
   const avg = totalMark / students.length;
   console.log("Average Marks:",avg);
   return avg, totalMark;
}, 0)
console.log("Total Marks",totalMarks);

//  ===== Problem 2 — Function + filter() + map() =====
const employees = [
  { name: "Mosharof", salary: 15000, department: "IT" },
  { name: "Rahim", salary: 8000, department: "HR" },
  { name: "Karim", salary: 22000, department: "IT" },
  { name: "Sumon", salary: 12000, department: "HR" },
  { name: "Hasan", salary: 18000, department: "IT" }
];


const getITReport = employees.filter(employee =>{

  if(employee.department === "IT" ){
    return employee;
  }
  // employee.map(employee =>{



  // } )

})
console.log(getITReport);