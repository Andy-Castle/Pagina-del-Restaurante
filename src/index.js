import "./style.css";
import home from "./Home";
import menu from "./Menu";
import about from "./About";

const headerButtons = document.querySelectorAll("button");
const mainContent = document.getElementById("content");

mainContent.innerHTML = home();

headerButtons.forEach((button) => {
  console.log(button.textContent);

  if (button.textContent == "Home") {
    button.addEventListener("click", () => {
      mainContent.innerHTML = home();
    });
  }

  if (button.textContent == "Menu") {
    button.addEventListener("click", () => {
      mainContent.innerHTML = menu();
    });
  }

  if (button.textContent == "About") {
    button.addEventListener("click", () => {
      mainContent.innerHTML = about();
    });
  }
});
