const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (userGuess < 1 || userGuess > 10) {
    message.innerHTML = "Please enter a number between 1 and 10.";
    message.style.color = "orange";
  } else if (userGuess > secretNumber) {
    message.innerHTML = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
    message.style.color = "red";
  } else if (userGuess < secretNumber) {
    message.innerHTML = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
    message.style.color = "red";
  } else {
    message.innerHTML = "🎉 Congratulations! You guessed the correct number.";
    message.style.color = "green";
  }
}