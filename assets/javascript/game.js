var rightGuess = 0;
var wrongGuess = 0;
var guessArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
  
var compPicks = guessArr[Math.floor(Math.random() * 26)];   
console.log(compPicks);

document.onkeyup = function(event) {
var humanPicks = event.key;

	if(humanPicks === compPicks) {
		console.log("This worked");
		rightGuess++;
		console.log("Wins:" + rightGuess);
		console.log(compPicks);
		document.getElementById("win").innerHTML  = 'Wins: '+ rightGuess;
	}

	else if(humanPicks !== compPicks){
		console.log("This worked too");
		wrongGuess++;
		console.log("Loses:" + wrongGuess);
		console.log(compPicks);
document.getElementById("lose").innerHTML  = 'Loses: '+ wrongGuess;
		}
	}

		
