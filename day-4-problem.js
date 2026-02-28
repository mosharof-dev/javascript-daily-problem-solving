

const students = [
  { name: "Mosharof", marks: 85 },
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 72 },
  { name: "Sumon", marks: 38 },
  { name: "Hasan", marks: 90 }
];

for(let student of students){
    if(student.marks >= 50){
        console.log( student.name, "is passed with marks", student.marks);
    }else{
        console.log(student.name,"is failed with marks", student.marks);
    }
}





const names = ["mosharof", "rahim", "karim", "sumon"];

for(let i = 0; i < names.length; i++){
    const firstLetter = names[i][0].toUpperCase();
    const restofName = names[i].slice(1);
    console.log(firstLetter + restofName);
}



