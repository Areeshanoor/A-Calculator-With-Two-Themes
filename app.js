document.addEventListener("DOMContentLoaded", function () {
    let screen = document.getElementById("screen");
    let buttons = document.querySelectorAll(".buttons span");
    let clear = document.getElementById("clc");
    let equal = document.getElementById("equal");
    let darkMode = false;
    let toggleBtn = document.querySelector(".toggleBtn");
  
    let equation = "";
    let shouldClearScreen = false;
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        let buttonText = button.textContent;
  
        if (buttonText === "clear") {
          equation = "";
        } else if (buttonText === "=") {
          try {
            let result = eval(equation);
            screen.textContent = result;
            equation = result;
          } catch (error) {
            screen.textContent = "Error";
          }
        } else {
          if (shouldClearScreen) {
            screen.textContent = "";
            shouldClearScreen = false;
          }
          equation += buttonText;
          screen.textContent += buttonText;
        }
      });
    });
  
    clear.addEventListener("click", function () {
      screen.textContent = "";
      equation = "";
    });
  
    toggleBtn.addEventListener("click", function () {
      darkMode = !darkMode;
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });
  });
  