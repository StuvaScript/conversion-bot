const button = document.querySelector("button");
const input = document.querySelector("input");
const display = document.querySelector(".display");

button.addEventListener("click", (e) => {
  e.preventDefault();
  convertNumbers(input.value);
  //   console.log(input.value);
  //   display.innerText = input.value;
});

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
