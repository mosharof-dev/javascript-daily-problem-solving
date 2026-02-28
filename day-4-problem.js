

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





// const names = ["mosharof", "rahim", "karim", "sumon"];

// const capitalizedNames = names.map(name => {
//     const firstLetter = name[0].toUpperCase();
//     const restOfName = name.slice(1);
//     return firstLetter + restOfName;
// });

// capitalizedNames.forEach(name => console.log(name));