let firstUserCard =10;
let secondUserCard =9;
let hasBlackjack = false;
let isAlive=true;
let message="";

let sum = firstUserCard + secondUserCard;

if(sum<21){
    message="Do you want to draw new card? 🙂";
}else if(sum===21){
    message=`Wohoo! You've got Blackjack! 🥳`;
    hasBlackjack= true;
}else{
    message=`You're out of the game! 😥`;
    isAlive=false;
}
console.log(message);