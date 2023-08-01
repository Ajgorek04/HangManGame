const popUpBox = document.querySelector(".popUpBox");
const main = document.querySelector(".main");

document.addEventListener("DOMContentLoaded", () => {
  popUpBox.style.transform = "translateY(0)";
});

const categoriesLI = document.querySelectorAll(".categories li");
const yourCategory = document.querySelector("#yourCategory");
const food = ["Pizza", "Fries", "Mielone", "Kotlet Schabowy"];
const animals = ["Dog", "Cat", "Horse", "Fish"];
const cars = ["Audi", "BMW", "Porsche"];

categoriesLI.forEach((li) => {
  li.addEventListener("click", (e) => {
    const keysDiv = document.querySelector(".keys");
    keysDiv.innerHTML = "";

    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      const button = document.createElement("button");
      button.textContent = letter;
      keysDiv.appendChild(button);
    }

    const selectedCategory = e.target.textContent;
    let selectedWord = "";

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

    const underscores = generateUnderscores(selectedWord);
    const wordElement = document.querySelector(".word span");
    wordElement.textContent = underscores;

    popUpBox.style.display = "none";
    main.style.display = "block";
  });
});

function generateUnderscores(word) {
  let underscores = "";
  for (let i = 0; i < word.length; i++) {
    underscores += "_ ";
  }
  return underscores;
}
