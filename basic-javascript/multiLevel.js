// Multi Level Conditional with If Statements

const price = 500;

const age = 25;

if(price > 1000){
    console.log("Expensive");
} else if(price > 500){
    console.log("Moderate");
} else if(price > 100){
    console.log("Affordable");
} else{
    console.log("Cheap");
}

if(price > 1000 && age > 30){
    console.log("You are eligible for a discount");
}

if(age < 12){
    console.log("You are a child and get a discount");
}else if (age >= 12 && age < 18){
    console.log("You are a teenager and get a discount");
}else if (age >= 18 && age < 65){
    console.log("You are an adult and do not get a discount");
}else{
    console.log("You are a senior and get a discount");
}