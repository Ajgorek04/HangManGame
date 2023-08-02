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
    main.style.display = "block";
  });
});

// A function that will change the styles of the button with the right letter

const buttons = document.querySelector(".keys");
const spanWord = document.querySelector(".word");

let guessedLetters = [];

buttons.addEventListener("click", (e) => {
  const clickedButton = e.target;
  if (clickedButton.tagName === "BUTTON") {
    if (selectedWord.includes(clickedButton.textContent)) {
      clickedButton.style.opacity = "0.1";
      clickedButton.style.cursor = "unset";

      if (!guessedLetters.includes(clickedButton.textContent)) {
        guessedLetters.push(clickedButton.textContent);
        updateWord();
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
