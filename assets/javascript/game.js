var rightGuess = 0;
var wrongGuess = 0;
var guessLeft = 9;
var guessArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var humanGuess = [];

for(var i = 0; i < guessArr.length; i++){
	var compPicks = guessArr[Math.floor(Math.random() * 25)];
	console.log(compPicks);

	document.onkeyup = function(event) {
	var humanPicks = String.fromCharCode(event.keyCode).toLowerCase();

		if(humanPicks == compPicks) {
			console.log("This worked");
			rightGuess++;
			console.log("Wins:" + rightGuess);
			console.log(compPicks);
			document.getElementById("win").innerHTML  = 'Wins: '+ rightGuess;
			document.getElementById("guess").innerHTML = 'Guesses so far: ' + humanGuess;
		}

		else if(humanPicks !== compPicks) {
			console.log("This worked too");
			guessLeft--;
			console.log("Loses:" + wrongGuess);
			console.log(compPicks);
			document.getElementById("guessLeft").innerHTML  = 'Guesses left: '+ guessLeft;
			humanGuess.push(humanPicks);
			document.getElementById("guess").innerHTML = 'Guesses so far: ' + humanGuess;
		}
		if (guessLeft === 0) {
			console.log("out of guesses");
			wrongGuess++;
			document.getElementById("lose").innerHTML = 'Loses: ' + wrongGuess;
			guessLeft += 9;
			console.log(guessLeft);
			document.getElementById("guessLeft").innerHTML  = 'Guesses left: '+ guessLeft;
		}
		if (guessLeft == 9){
			humanGuess.length = 0;
			console.log(humanGuess);
				document.getElementById("guess").innerHTML = 'Guesses so far: ' + humanGuess;
		}
	}
}		
