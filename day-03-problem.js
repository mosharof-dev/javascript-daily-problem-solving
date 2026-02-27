// // Ei array er sob numbers add kore 
// // total price print koro


const prices = [120, 450, 80, 320, 95];

let totalPrice = 0;

for(let i = 0; i < prices.length; i++){
    totalPrice = totalPrice + prices[i];
}
console.log("Total Price : ", totalPrice);


const scores = [45, 92, 67, 88, 23, 99, 54];

let highestScore = scores[0];

for(let i = 1; i < scores.length; i++){ 
    if(scores[i] > highestScore){
        highestScore = scores[i];
    }}
console.log("Highest Score : ", highestScore);