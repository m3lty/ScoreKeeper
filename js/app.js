// var p1Score = 0,
// 	p2Score = 0,
// 	victoryScore = document.getElementById("maxScore").value;


// document.getElementById("playingTo").innerHTML = "Playing to " + victoryScore;

// var p1Button = document.querySelector("#p1Button");
// var p2Button = document.querySelector("#p2Button");

// p1Button.addEventListener("click", p1Incriment);
// p2Button.addEventListener("click", p2Incriment);




// function p1Incriment(){++++
// 	p1Score =  p1Score + 1;
// 	document.getElementById("p1Score").innerHTML = p1Score;
// }

// function p2Incriment(){
// 	p2Score++;
// 	document.getElementById("p2Score").innerHTML = p2Score;

// }
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Total");
var p2Display = document.querySelector("#p2Total");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;

		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}	
	}
	
	p2Display.textContent = p2Score;
});	

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0 ;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});