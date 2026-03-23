// ======== Problem 1 ===========

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