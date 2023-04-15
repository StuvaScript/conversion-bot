// ---- GLOBAL VARIABLES ----
const button = document.querySelector("button");
const input = document.querySelector("input");
const display = document.querySelector(".display");
let valuesArray;

// ---- CONVERSION LOGIC ----
button.addEventListener("click", (e) => {
  e.preventDefault();
  putMyThangDownFlipItAndReverseIt();
  console.log(valuesArray);
  loopyDoop();
  console.log(valuesArray);

  // addSuffixes();
  anotherFlipper();
  console.log(valuesArray);
  display.innerText = valuesArray;
  if (display.innerText === "") {
    display.innerText = "zero";
  }
});

// ---- FUNCTIONS ----
function putMyThangDownFlipItAndReverseIt() {
  // Creates an array of the input numbers and reverses their order.
  valuesArray = input.value.split("").reverse();
}

function loopyDoop() {
  // Loops thru the array
  for (let i = 0; i < valuesArray.length; i++) {
    // At the different array positions, calls on the correct function.
    switch (i) {
      case 0:
      case 2:
      case 3:
      case 5:
      case 6:
      case 8:
      case 9:
        singleDigits(valuesArray[i], i);
        break;
      case 1:
      case 4:
      case 7:
        if (valuesArray[i] === "1") {
          specialTensPosition(i);
        } else {
          tensPosition(valuesArray[i], i);
        }
        break;
    }
  }
}

function addSuffixes() {
  // Loops thru the array
  for (let i = 0; i < valuesArray.length; i++) {
    // At the different array positions, adds the correct suffixes.
    switch (i) {
      case 2:
      case 5:
      case 8:
        valuesArray[i] = valuesArray[i] + " hundred";
        break;
      case 3:
        valuesArray[i] = valuesArray[i] + " thousand";
        break;
      case 6:
        valuesArray[i] = valuesArray[i] + " million";
        break;
      case 9:
        valuesArray[i] = valuesArray[i] + " billion";
        break;
    }
  }
}

function anotherFlipper() {
  // Reverses the array and joins the array values together into a single string.
  valuesArray = valuesArray.reverse().join(" ");
}

function singleDigits(digit, position) {
  // 'Digit' is the input value
  // 'Position' is the location in the array
  switch (digit) {
    case "0":
      valuesArray[position] = "";
      break;
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
    case "0":
      valuesArray[position] = "";
      break;
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

function specialTensPosition(position) {
  // 'Position' is the location in the array
  // Removes the '1' from the array's current position.
  valuesArray[position] = "";
  // Checks the previous array position value and changes it to the correct value.
  switch (valuesArray[position - 1]) {
    case "0":
      valuesArray[position - 1] = "ten";
      break;
    case "one":
      valuesArray[position - 1] = "eleven";
      break;
    case "two":
      valuesArray[position - 1] = "twelve";
      break;
    case "three":
      valuesArray[position - 1] = "thirteen";
      break;
    case "four":
      valuesArray[position - 1] = "fourteen";
      break;
    case "five":
      valuesArray[position - 1] = "fifteen";
      break;
    case "six":
      valuesArray[position - 1] = "sixteen";
      break;
    case "seven":
      valuesArray[position - 1] = "seventeen";
      break;
    case "eight":
      valuesArray[position - 1] = "eighteen";
      break;
    case "nine":
      valuesArray[position - 1] = "nineteen";
      break;
  }
}
