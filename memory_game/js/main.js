var cards = [
 {
 	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 }
];

var cardsInPlay = []; //This array will eventually hold the cards that are in play.

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");//alert?
	} else {
  		alert("Sorry, try again.");
	}
}//end of checkForMatch function

function flipCard (cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank); //add the card that the user flipped to the cardsInPlay array.
	console.log(cards[cardId].cardImage);//temp?
	console.log(cards[cardId].suit);//temp?
	//if statement that checks to see if the length of the cardsInPlay array is 2 to call checkForMatch.
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}//end of flipCard function

flipCard(0);
flipCard(2);