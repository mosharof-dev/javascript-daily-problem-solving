// Task = 1 Free Drinks 

let burgerPrice = 400;

if (burgerPrice >= 500) {
    console.log("You get a free coke!");
}
else {
    console.log("No free coke for you. and coke price is 100 tk");
}

// Task = 2 BMI Calculator and Health Category

let weight = 60; 
let height = 1.75; 

let bmi = weight / (height * height);

console.log("Your BMI is: " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal weight");
}
else if (bmi >= 25 && bmi < 29.9) {
    console.log("Overweight");
}
else {
    console.log("Obesity");
}