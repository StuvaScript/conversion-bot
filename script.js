// ---- GLOBAL VARIABLES ----
const button = document.querySelector("button");
const input = document.querySelector("input");
const display = document.querySelector(".display");
let valuesArray;

// ---- CONVERSION LOGIC ----
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value + " input value");
  putMyThangDownFlipItAndReverseIt();
  console.log("new reversed array below");
  console.log(valuesArray);

  loopyDoop();

  anotherFlipper();
  console.log(valuesArray + " final output");
  display.innerText = valuesArray;
});

// ---- FUNCTIONS ----
function loopyDoop() {
  // Loops thru the array
  for (let i = 0; i < valuesArray.length; i++) {
    // At the different array positions, call on the correct function
    switch (i) {
      case 0:
        console.log(valuesArray[i] + " zeroth");
        singleDigits(valuesArray[i], i);
        break;
      case 1:
        console.log(valuesArray[i] + " first");
        tensPosition(valuesArray[i], i);
        break;
      case 2:
        console.log(valuesArray[i] + " second");
        singleDigits(valuesArray[i], i);
        break;
      case 3:
        console.log(valuesArray[i] + " third");
        singleDigits(valuesArray[i], i);
        break;
      case 4:
        console.log(valuesArray[i] + " fourth");
        tensPosition(valuesArray[i], i);
        break;
      case 5:
        console.log(valuesArray[i] + " fifth");
        singleDigits(valuesArray[i], i);
        break;
      case 6:
        console.log(valuesArray[i] + " sixth");
        singleDigits(valuesArray[i], i);
        break;
      case 7:
        console.log(valuesArray[i] + " seventh");
        tensPosition(valuesArray[i], i);
        break;
      case 8:
        console.log(valuesArray[i] + " eighth");
        singleDigits(valuesArray[i], i);
        break;
      case 9:
        console.log(valuesArray[i] + " ninth");
        singleDigits(valuesArray[i], i);
        break;
    }
  }
}

function anotherFlipper() {
  // Reverses the array and joins the array values together into a single string.
  valuesArray = valuesArray.reverse().join(" ");
}

function putMyThangDownFlipItAndReverseIt() {
  // Creates an array of the input numbers and reverses their order.
  valuesArray = input.value.split("").reverse();
}

function singleDigits(digit, position) {
  // 'Digit' is the input value
  // 'Position' is the location in the array
  switch (digit) {
    case "1":
      valuesArray[position] = "one";
      break;
    case "2":
      valuesArray[position] = "two";
      break;
    case "3":
      valuesArray[position] = "three";
      break;
    case "4":
      valuesArray[position] = "four";
      break;
    case "5":
      valuesArray[position] = "five";
      break;
    case "6":
      valuesArray[position] = "six";
      break;
    case "7":
      valuesArray[position] = "seven";
      break;
    case "8":
      valuesArray[position] = "eight";
      break;
    case "9":
      valuesArray[position] = "nine";
      break;
  }
}

function tensPosition(digit, position) {
  // 'Digit' is the input value
  // 'Position' is the location in the array
  switch (digit) {
    case "2":
      valuesArray[position] = "twenty";
      break;
    case "3":
      valuesArray[position] = "thirty";
      break;
    case "4":
      valuesArray[position] = "forty";
      break;
    case "5":
      valuesArray[position] = "fifty";
      break;
    case "6":
      valuesArray[position] = "sixty";
      break;
    case "7":
      valuesArray[position] = "seventy";
      break;
    case "8":
      valuesArray[position] = "eighty";
      break;
    case "9":
      valuesArray[position] = "ninety";
      break;
  }
}
