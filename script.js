const popUpBox = document.querySelector(".popUpBox");

document.addEventListener("DOMContentLoaded", () => {
  popUpBox.style.transform = "translateY(0)";
});

const categoriesLI = document.querySelectorAll(".categories li");

categoriesLI.forEach((li) => {
  li.addEventListener("click", () => {
    console.log("chuj");
  });
});
