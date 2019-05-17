var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; //This array will eventually hold the cards that are in play.
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
console.log("User flipped queen");

cardsInPlay.push(cardTwo);
console.log("User flipped king");

//if statement that checks to see if the length of the cardsInPlay array is 2.
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}
}