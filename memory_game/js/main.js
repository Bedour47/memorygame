var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; //This array will eventually hold the cards that are in play.

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}//end of checkForMatch function

function flipCard (cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]); //add the card that the user flipped to the cardsInPlay array.

	//if statement that checks to see if the length of the cardsInPlay array is 2 to call checkForMatch.
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}//end of flipCard function

flipCard(0);
flipCard(2);