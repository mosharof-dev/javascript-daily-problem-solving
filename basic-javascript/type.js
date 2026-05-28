  console.log("Mosharof");

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