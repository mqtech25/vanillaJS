
let cardArray=[]
let hasBlackjack = false;
let isAlive=false;
let message="";

let sum = 0; 

let messageEl= document.getElementById('message-el')
let sumEl= document.getElementById('sum-el')
let cardEl = document.getElementById('card-el');


let startGame =()=>{
    isAlive= true
    let firstCardNumber= randomNumberFunc()
    let secondCardNumber= randomNumberFunc()
    sum=firstCardNumber + secondCardNumber;
    cardArray=[firstCardNumber,secondCardNumber]
    renderGame();
}



let renderGame = ()=>{

    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cardArray.length; i++) {

         cardEl.textContent += cardArray[i] + " ";
    }

    sumEl.textContent = "Sum = "+ sum;
    checkFunc(sum)

    
}

let newCard = ()=>{
    
    let card= randomNumberFunc();
    cardArray.push(card)
    sum += card;
    renderGame()
}

let checkFunc =(sum)=>{
    if(sum<21){
        message="Do you want to draw new card? 🙂";
    }else if(sum===21){
        message=`Wohoo! You've got Blackjack! 🥳`;
        hasBlackjack= true;
    }else{
        message=`You're out of the game! 😥`;
        isAlive=false;
    }
    messageEl.textContent = message;
}


function randomNumberFunc  (){
    let rendomValue= Math.floor(((Math.random()*13)+1 )) ;
    if(rendomValue>10){
        return 10
    }else if(rendomValue===1){
        return 11
    }else{
        return rendomValue;
    }
} 