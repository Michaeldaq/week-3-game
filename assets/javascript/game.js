var rightGuess = 0;
var wrongGuess = 0;
var guessLeft = 9;
var guessArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var humanGuess = [];
var compPicks = "";

document.onkeyup = function(event) {
var humanPicks = String.fromCharCode(event.keyCode).toLowerCase();

function selectNew(){
	compPicks = guessArr[Math.floor(Math.random() * guessArr.length)];


	return compPicks;
}
function endGame(){
	humanGuess = [];
	guessLeft = 9;
	alert("Oh no you lose!... well go ahead try again.");
	console.log("is this working?");
	return;

}

	//
	if (guessLeft > 0){
		
		if(humanPicks !== compPicks) {
			console.log("This worked too");
			guessLeft--;
			console.log("Loses:" + wrongGuess);
			console.log(compPicks);
			document.getElementById("guessLeft").innerHTML  = 'Guesses left: '+ guessLeft;
			humanGuess.push(humanPicks);
			document.getElementById("guess").innerHTML = 'Guesses so far: ' + humanGuess;
		
		}
		else if(humanPicks == compPicks) {
				console.log("This worked");
				selectNew();
				rightGuess++;
				console.log("Wins:" + rightGuess);
				console.log(compPicks);
				document.getElementById("win").innerHTML  = 'Wins: '+ rightGuess;
				humanGuess = [];
				document.getElementById("guess").innerHTML = 'Guesses so far: ' + humanGuess;

		}
	}

	else if (guessLeft == 0) {
		console.log("out of guesses");
		selectNew();
		wrongGuess++;
		document.getElementById("lose").innerHTML = 'Loses: ' + wrongGuess;
		guessLeft += 9;
		console.log(guessLeft);
		document.getElementById("guessLeft").innerHTML  = 'Guesses left: '+ guessLeft;
		humanGuess = [];
		console.log(humanGuess);
		document.getElementById("guess").innerHTML = 'Guesses so far: ' + humanGuess;

	if(wrongGuess != 0) {

					endGame();

				}
		
	}
}
		
