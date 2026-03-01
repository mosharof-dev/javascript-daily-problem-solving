const votes = ["yes", "no", "yes", "yes", "no", "yes", "no"];

let yesCount = 0;
let noCount = 0;

for(let i =0 ; i < votes.length; i++){ 
    if(votes[i ] === "yes" ){
       yesCount ++;
       
       console.log(yesCount,votes[i] ); 
    }
  
}

for(let i = 0; i < votes.length; i++){
    if(votes[i] === "no"){
        noCount ++;
        console.log( noCount,votes[i] );
    }
}

