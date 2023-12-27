const words = ["femma", "funny", "silly", "weird", "peanut", "nuts", "ballet", "mojo", "yoshi", "nerd", "washu", "dsp", "ocd", "bitch", "wine", "cheese"];
const selectedWord = words[Math.floor(Math.random() * words.length)];

// Set max length of text input
document.getElementById('guess-input').setAttribute("maxlength", selectedWord.length)

// Array of the current state of the guessed word
// Each int corresponds to a letter, with:
// 0 -> incorrect
// 1 -> in wrong spot
// 2 -> correct
var guessCorrectness = new Array(selectedWord.length).fill(0);
var guess = new Array(selectedWord.length + 1).join(" ");

function displayWord() {
  var wordDisplay = document.getElementById("word-display");
  var displayString = "<div class=\"guess\">";
  for (var i = 0; i < guessCorrectness.length; ++i) {
    if (guessCorrectness[i] === 0) {
        displayString += "<div class=\"underline guessChar\">" + guess[i] + "</div>";
    }
    else if (guessCorrectness[i] === 1) {
        displayString += "<div class=\"yellow guessChar\">" + guess[i] + "</div>"
    }
    else {
        displayString += "<div class=\"green guessChar\">" + guess[i] + "</div>"
    }
  }
  displayString += "</div>";
  wordDisplay.innerHTML += displayString;
}

function checkGuess() {
  const guessInput = document.getElementById("guess-input");
  var guessValue = guessInput.value;

  if (guessValue.length === selectedWord.length && /^[a-zA-Z]+$/.test(guessValue)) {
    guess = guessValue.toLowerCase();

    for (var i = 0; i < guess.length; ++i) {
        if (guess[i] === selectedWord[i]) {
            guessCorrectness[i] = 2;
        }
        else if (selectedWord.includes(guess[i])) {
            guessCorrectness[i] = 1;
        }
        else {
            guessCorrectness[i] = 0;
        }
    }

    displayWord();

    if (selectedWord === guess) {
      alert("Congratulations! You guessed the word!");
    }

    guessInput.value = '';
  } 
  else {
    alert("Please enter a valid word.");
  }
}

function reset() {
  location.reload();
}

// Initial display
displayWord();