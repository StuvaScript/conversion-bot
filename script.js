// ---- GLOBAL VARIABLES ----
const button = document.querySelector("button");
const input = document.querySelector("input");
const display = document.querySelector(".display");
let values;

// ---- CONVERSION LOGIC ----
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value + " input value");
  putMyThangDownFlipItAndReverseIt();
  console.log("new reversed array below");
  console.log(values);
  anotherFlipper();
  console.log(values + " final output");
  display.innerText = values;
});

// ---- FUNCTIONS ----
function anotherFlipper() {
  // Reverses the array and joins the array values together into a single string.
  values = values.reverse().join(" ");
}

function putMyThangDownFlipItAndReverseIt() {
  // Creates an array of the input numbers and reverses their order.
  values = input.value.split("").reverse();
}

function convertNumbers(value) {
  switch (value) {
    case "1":
      display.innerText = "one";
      break;
    case "2":
      display.innerText = "two";
      break;
    case "3":
      display.innerText = "three";
      break;
    case "4":
      display.innerText = "four";
      break;
    case "5":
      display.innerText = "five";
      break;
    case "6":
      display.innerText = "six";
      break;
    case "7":
      display.innerText = "seven";
      break;
    case "8":
      display.innerText = "eight";
      break;
    case "9":
      display.innerText = "nine";
      break;
  }
}
