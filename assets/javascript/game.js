var wins = 0;
var losses = 0;

var maxErrors = 10;

var wordDisplayLettersElement = document.getElementById("word-display-letters");
var guessedLettersElement = document.getElementById("guessed-letters");
var errorCountElement = document.getElementById("error-count");
var winCountElement = document.getElementById("win-count");
var lossCountElement = document.getElementById("loss-count");


var alertLineElements = document.getElementsByClassName("alert-line");

var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];



var youWin = [
    'YOU WIN'
    
];
var youLose = [
    'YOU LOSE'
];
var emptyAlert = [
	" ",
	
];

var game = new wordguess();

document.onkeyup = function(event) {
	var userGuess = event.key;

	if (!game.gameOver) {
		if (validGuesses.includes(userGuess) && !game.guessedLetters.includes(userGuess)) {
            game.checkGuess(userGuess);
            
		}
	} else {
        document.getElementById("alerts").style.visibility = "hidden"
		game = new wordguess();
        game.updatePageData();
       
	}   
            

}



function wordguess() {
	this.wordList = [
		"grass",
		"lady",
		"care",
		"apple",
		"people",
		
		
	]

	this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
	this.guessedLetters = [];
	this.errors = 0;
	this.visibleLetters = [];
	this.gameOver = false;
    this.alertLines = emptyAlert;
    console.log(this)
	for (var i = 0; i < this.word.length; i++) {
		this.visibleLetters[i] = (false);
	}
}

wordguess.prototype.checkGuess = function(char) {
	this.guessedLetters.push(char);

	var isInWord = false;
	for (var i = 0; i < this.word.length; i++) {
		if (this.word.charAt(i) === char) {
			isInWord = true;
			this.visibleLetters[i] = true;
		}
	}
	if (!isInWord) {
		this.errors++;
	}

	if (this.errors >= maxErrors) {
		losses++;
		this.alertLines = youLose;
        this.gameOver = true;
		document.getElementById("alerts").style.visibility = "visible"
		document.getElementById("alerts").style.color = "red"
	}

	if (!this.visibleLetters.includes(false)) {
		wins++;
		this.alertLines = youWin;
        this.gameOver = true;
		document.getElementById("alerts").style.visibility = "visible"
		document.getElementById("alerts").style.color = "green"
	}

	game.updatePageData();
};

wordguess.prototype.updatePageData = function() {
	var tempString = "";
	for (var i = 0; i < this.visibleLetters.length; i++) {
		tempString += ((this.visibleLetters[i] || this.gameOver) ? this.word.charAt(i) : "_");
		if (i < (this.visibleLetters.length - 1)) tempString += " ";
	}
	wordDisplayLettersElement.textContent = tempString;

	tempString = "";
	for (var i = 0; i < this.guessedLetters.length; i++) {
		tempString += (this.guessedLetters[i].toUpperCase());
		if (i < (this.guessedLetters.length - 1)) tempString += " ";
	}
	for (var i = tempString.length; i < 51; i++) {
		tempString += " ";
	}
	guessedLettersElement.textContent = tempString;

	tempString = this.errors + " / " + maxErrors;
	for (var i = tempString.length; i < 50; i++) {
		tempString += " ";
	}
	errorCountElement.textContent = tempString;

	tempString = wins + "";
	for (var i = tempString.length; i < 50; i++) {
		tempString += " ";
	}
	winCountElement.textContent = tempString;

	tempString = losses + "";
	for (var i = tempString.length; i < 43; i++) {
		tempString += " ";
	}
	lossCountElement.textContent = tempString;

	for (var i = 0; i < alertLineElements.length; i++) {
		alertLineElements[i].textContent = (this.alertLines[i]);
	}
}

  
game.updatePageData();
