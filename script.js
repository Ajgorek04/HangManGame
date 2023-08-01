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
let selectedWord = "";

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

    const selectedCategory = e.target.textContent;

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

    popUpBox.style.display = "none";
    main.style.display = "block";
  });
});
