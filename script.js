/*Using if statements, create a rock, paper, scissors game.
You may use any method of user input and any method of visualisation (alerts, document.getElement etc),
as you will be marked on the JavaScript logic around your if statements*/

var userGo;
var result;
var compGo;
var compGuess;
var compGuessEmoji;
var winCounter = 0;
var lossCounter = 0;
var drawCounter = 0;

function rockPaperScissors() {
  //prompt the user to enter either rock, paper or scissors
  userGo = prompt("Choose Rock, Paper or Scissors");
  userGo = userGo.trim();
  userGo = userGo.toLowerCase();
  //The computer randomlt selects a number and it gets assigned rock, paper or scissors
  compGo = Math.floor(Math.random() * 3);
  console.log(compGo);
  if (compGo == 0) {
    compGuess = "rock";
  } else if (compGo == 1) {
    compGuess = "paper";
  } else if (compGo == 2) {
    compGuess = "scissors";
  }
  //after the compGuess is computed, we always run the emoji setter to assign an emoji to the computer guess
  setCompEmoji();
  //then we have nested if statements to assign win, result or draw
  if (userGo == "rock") {
    if (compGuess == "scissors") {
      result = "win";
      winCounter = winCounter + 1;
    } else if (compGuess == "paper") {
      result = "lose";
      lossCounter = lossCounter + 1;
    } else if (compGuess == "rock") {
      result = "draw";
      drawCounter = drawCounter + 1;
    }
    displayResult();
  } else if (userGo == "paper") {
    if (compGuess == "rock") {
      result = "win";
      winCounter = winCounter + 1;
    } else if (compGuess == "scissors") {
      result = "lose";
      lossCounter = lossCounter + 1;
    } else if (compGuess == "paper") {
      result = "draw";
      drawCounter = drawCounter + 1;
    }
    displayResult();
  } else if (userGo == "scissors") {
    if (compGuess == "paper") {
      result = "win";
      winCounter = winCounter + 1;
    } else if (compGuess == "rock") {
      result = "lose";
      lossCounter = lossCounter + 1;
    } else if (compGuess == "scissors") {
      result = "draw";
      drawCounter = drawCounter + 1;
    }
    displayResult();
    console.log(winCounter);
  } else if (userGo != "rock" || userGo != "scissors" || userGo != "paper") {
    alert("You need to enter either Rock, Paper or Scissors, try again!");
  }
}

function setCompEmoji() {
  //emoji!
  if (compGuess == "rock") {
    compGuessEmoji = "🪨";
  } else if (compGuess == "scissors") {
    compGuessEmoji = "✂";
  } else if (compGuess == "paper") {
    compGuessEmoji = "📄";
  }
}

function displayResult() {
  //show win or lose to user
  if (result == "win") {
    alert(
      "The computer chose " +
        compGuess +
        compGuessEmoji +
        ". You are the winner! 🥳"
    );
  } else if (result == "lose") {
    alert(
      "The computer chose " +
        compGuess +
        compGuessEmoji +
        ". You are the loser! 😥"
    );
  } else if (result == "draw") {
    alert(
      "The computer chose " + compGuess + compGuessEmoji + ". You have drawn"
    );
  }
  //system updates the counters
  document.getElementById("wins").innerHTML = winCounter;
  document.getElementById("loss").innerHTML = lossCounter;
  document.getElementById("draw").innerHTML = drawCounter;
}
