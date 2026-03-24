// ======== Problem 1 — reduce() Practice===========

const students = [
  { name: "Mosharof", marks: 85 },
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 72 },
  { name: "Sumon", marks: 38 },
  { name: "Hasan", marks: 90 }
];

const totalMarks = students.reduce((accumulator, current)=>{
    return accumulator + current.marks;  
}, 0)

const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);
console.log("Total Marks:",totalMarks);

//  ===== Problem 2 — Function + filter() + map() =====
const employees = [
  { name: "Mosharof", salary: 15000, department: "IT" },
  { name: "Rahim", salary: 8000, department: "HR" },
  { name: "Karim", salary: 22000, department: "IT" },
  { name: "Sumon", salary: 12000, department: "HR" },
  { name: "Hasan", salary: 18000, department: "IT" }
];
const getHRReport = () => {
  return employees
  .filter(employee => employee.department === "HR")
  .map(employee => {
    let updateSalary = employee.salary - (employee.salary * 10/ 100)
    return{
      ...employee,
      salary: updateSalary
    }
  } )
}
console.log(getHRReport());

const getITReport = () => {
 return employees
 .filter(employee => employee.department === "IT")
 .map(employee =>{
  const newSalary = employee.salary + (employee.salary * 10 /100)
  return{
    ...employee,
    salary: newSalary
  }
 })

}
console.log(getITReport());