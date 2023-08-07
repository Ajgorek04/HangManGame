const popUpBox = document.querySelector(".popUpBox");
const main = document.querySelector(".main");

document.addEventListener("DOMContentLoaded", () => {
  popUpBox.style.transform = "translateY(0)";
});

const categoriesLI = document.querySelectorAll(".categories li");
const yourCategory = document.querySelector("#yourCategory");
const food = ["PIZZA", "FRIES", "MIELONE", "SCHABOWY"];
const animals = ["DOG", "CAT", "HORSE", "FISH"];
const cars = ["AUDI", "BMW", "PORSCHE"];
let selectedWord;
let selectedCategory;

categoriesLI.forEach((li) => {
  li.addEventListener("click", (e) => {
    const keysDiv = document.querySelector(".keys");
    keysDiv.innerHTML = "";

    for (i = 65; i <= 90; i++) {
      const button = document.createElement("button");
      const letter = String.fromCharCode(i);
      button.textContent = letter;
      keysDiv.appendChild(button);
    }

    selectedCategory = e.target.textContent;

    if (selectedCategory === "Food") {
      const randomIndex = Math.floor(Math.random() * food.length);
      selectedWord = food[randomIndex];
      console.log(selectedWord);
      yourCategory.textContent += ` ${selectedCategory}`;
    }
    //Animals
    else if (selectedCategory === "Animals") {
      const randomIndex = Math.floor(Math.random() * animals.length);
      selectedWord = animals[randomIndex];
      console.log(selectedWord);
      yourCategory.textContent += ` ${selectedCategory}`;
    }
    // Cars
    else if (selectedCategory === "Cars") {
      const randomIndex = Math.floor(Math.random() * cars.length);
      selectedWord = cars[randomIndex];
      console.log(selectedWord);
      yourCategory.textContent += ` ${selectedCategory}`;
    }

    const spanWord = document.querySelector(".word");
    const wordLength = selectedWord.length;
    const hiddenWordArray = selectedWord
      .split("")
      .map((letter) => "_")
      .join(" ");

    spanWord.textContent = hiddenWordArray;

    popUpBox.style.display = "none";
    main.style.display = "flex";
  });
});

// A function that will change the styles of the button with the right letter

const buttons = document.querySelector(".keys");
const spanWord = document.querySelector(".word");
const winBox = document.querySelector(".winBox");
const box2 = document.querySelector(".box2");

let guessedLetters = [];
let wrongGuessedLetters = [];
let displayedWord;

buttons.addEventListener("click", (e) => {
  const clickedButton = e.target;
  if (clickedButton.tagName === "BUTTON") {
    if (selectedWord.includes(clickedButton.textContent)) {
      clickedButton.style.backgroundColor = "#05ed18";
      clickedButton.style.opacity = "0.1";
      clickedButton.style.cursor = "unset";

      if (!guessedLetters.includes(clickedButton.textContent)) {
        guessedLetters.push(clickedButton.textContent);
        updateWord();
        displayedWord = spanWord.textContent.replace(/ /g, "");

        if (displayedWord === selectedWord) {
          winBox.style.display = "flex";
          box2.classList.add("slide-in");
        }
      }
    } else {
      if (!wrongGuessedLetters.includes(clickedButton.textContent)) {
        clickedButton.style.backgroundColor = "#ff0000";
        clickedButton.style.opacity = "0.1";
        clickedButton.style.cursor = "unset";
        wrongGuessedLetters.push(clickedButton.textContent);
        wrongGuess();
      }
    }
  }
});

function updateWord() {
  const updateWordWordArray = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    // ? letter : "_"
    // Sprawdza czy litera znajduje sie w tablicy, jesli tak to zwraca ta litere (letter), a jesli nie to zwraca "_"
    .join(" ");
  // .join bo map nie dodaje spacji, np petla for dodaje

  spanWord.textContent = updateWordWordArray;
}

const img = document.querySelector(".hangManImg img");
const loseBox = document.querySelector(".loseBox");
const hiddenWord = document.querySelector("#hiddenWord");

let wrongLetter = 0;

function wrongGuess() {
  wrongLetter += 1;

  switch (wrongLetter) {
    case 1:
      img.src = `../imgs/hangman${1}.png`;
      break;
    case 2:
      img.src = `../imgs/hangman${2}.png`;
      break;
    case 3:
      img.src = `../imgs/hangman${3}.png`;
      break;
    case 4:
      img.src = `../imgs/hangman${4}.png`;
      break;
    case 5:
      img.src = `../imgs/hangman${5}.png`;
      break;
    case 6:
      img.src = `../imgs/hangman${6}.png`;
      break;
    case 7:
      img.src = `../imgs/hangman${7}.png`;
      break;
    case 8:
      img.src = `../imgs/hangman${8}.png`;
      break;
    case 9:
      img.src = `../imgs/hangman${9}.png`;
      break;
    case 10:
      img.src = `../imgs/hangman${10}.png`;
      break;
    case 11:
      img.src = `../imgs/hangman${11}.png`;
      break;
    default:
      console.log("LOSE");
      loseBox.style.display = "flex";
      box.classList.add("slide-in");
      hiddenWord.textContent += ` ${selectedWord}`;
      break;
  }
}

// NEW GAME

const playAgainBtn = document.querySelectorAll(".playAgain");
const box = document.querySelector(".box");
playAgainBtn.forEach((button) => {
  button.addEventListener("click", newCard);
});

function newCard() {
  box.classList.remove("slide-in");
  box2.classList.remove("slide-in");
  box.classList.add("slide-out");
  box2.classList.add("slide-out");

  setTimeout(function () {
    location.reload();
  }, 1000);
}
