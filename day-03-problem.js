

const prices = [120, 450, 80, 320, 95];

let totalPrice = 0;

for(let i = 0; i < prices.length; i++){
    totalPrice = totalPrice + prices[i];
}
// console.log("Total Price : ", totalPrice);



const scores = [45, 92, 67, 88, 23, 99, 54];

let highestScore = scores[0];

for(let i = 1; i < scores.length; i++){ 
    if(scores[i] > highestScore){
        highestScore = scores[i];
    }}
// console.log("Highest Score : ", highestScore);


const numbers = [ 20, 50, 300, 54, 700, 20];

let totalNumber = 0;

for(let i = 0 ; i <  numbers.length; i++){
    totalNumber = totalNumber + numbers[i];
}
console.log("Total Number :", totalNumber);


const  number = [99, 40, 50, 90, 57, 89, 45];
let num = number[0];
for(let i = 0; i < number.length; i++){
    if(number[i] < num){
        num = number[i]
    }
}
console.log("Sob Theke Choto Number", num);


let y = [12, 50, 40, 60, 80, 90];

let m = 0;
for(let i =0; i < y.length; i++){
    m = m + y[i];    
}
console.log("Total Sum", m);