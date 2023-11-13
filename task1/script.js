let outputscreen = document.getElementById("outputscreen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (i of buttons) {
  i.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      outputscreen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      outputscreen.value = screenValue;
    } else if (buttonText == "=") {
      outputscreen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      outputscreen.value = screenValue;
    }
  });
}
