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
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
	}
};//end of checkForMatch function


function flipCard (){
	//getAttribute method to get the data-id attribute of the card that was just clicked and store it in a variable cardId.
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank); //add the card that the user flipped to the cardsInPlay array.
	//log into the console the flipped card details.
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//use the setAttribute method to update the src attribute to the image of the card that was just clicked
	this.setAttribute('src', cards[cardId].cardImage);

	//if statement that checks to see if the length of the cardsInPlay array is 2 to call checkForMatch.
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};//end of flipCard function


//this function will create a new game board
function createBoard (){
	for (var i = 0; i < cards.length; i++) {
		//For each card, use createElement to create an "img" element and store it in a variable cardElement.
		var cardElement = document.createElement('img');
		//use the setAttribute() method on cardElement to set some attributes that we want. (here src attribute)
		cardElement.setAttribute('src', 'images/back.png');
		//Set the card's 'data-id' attribute to be the current index of the card array, (i).
		cardElement.setAttribute('data-id', i);
		
		//use the addEventListener() method on the cardElement. Add a click event so that when a user clicks on a card, the flipCard function is called.
		cardElement.addEventListener('click', flipCard);
		//append the cardElement to the game board.
		document.getElementById('game-board').appendChild(cardElement);
	}
};//end of createBoard function

createBoard();

//this function will resets the game board
function reset(){
	document.getElementById('game-board').innerHTML = " "; //to clear the game board.
	cardsInPlay = []; //to clear the array content so the alert will be effective again once we reset the board.
	createBoard(); //to create a new game board :)
}