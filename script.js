// ---- GLOBAL VARIABLES ----
const button = document.querySelector("button");
const input = document.querySelector("input");
const display = document.querySelector(".display");
let valuesArray;

// ---- CONVERSION LOGIC ----
button.addEventListener("click", (e) => {
  e.preventDefault();
  putMyThangDownFlipItAndReverseIt();
  // console.log("flip");
  // console.log(valuesArray);
  loopyDoop();
  // console.log("post loop");
  // console.log(valuesArray);
  // addSuffixes();
  // console.log("add suffixes");
  // console.log(valuesArray);
  anotherFlipper();
  // console.log("other flipper");
  // console.log(valuesArray);
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
        // console.log("singles");
        // console.log(valuesArray);
        singleDigits(valuesArray[i], i);
        break;
      case 1:
      case 4:
      case 7:
        if (valuesArray[i] === "1") {
          // console.log("special tens");
          // console.log(valuesArray);
          specialTensPosition(i);
        } else {
          // console.log("tens");
          // console.log(valuesArray);
          tensPosition(valuesArray[i], i);
        }
        break;
    }
  }
}

function addSuffixes() {
  // console.log(valuesArray[valuesArray.length - 1] + " turdz");

  // Loops thru the array
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[valuesArray.length - 1] !== "") {
      console.log("buttz");
    }
    // At the different array positions, adds the correct suffixes.
    switch (i) {
      case 2:
      case 5:
      case 8:
        if (valuesArray[i] !== "") {
          valuesArray[i] = valuesArray[i] + " hundred";
        }
        break;
      case 3:
        if (valuesArray[i] !== "") {
          valuesArray[i] = valuesArray[i] + " thousand";
        }
        break;
      case 6:
        if (valuesArray[i] !== "") {
          valuesArray[i] = valuesArray[i] + " million";
        }
        break;
      case 9:
        if (valuesArray[i] !== "") {
          valuesArray[i] = valuesArray[i] + " billion";
        }
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
  singlesObj = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  valuesArray[position] = singlesObj[digit];
}

function tensPosition(digit, position) {
  // 'Digit' is the input value
  // 'Position' is the location in the array
  tensObj = {
    0: "",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };
  valuesArray[position] = tensObj[digit];
}

function specialTensPosition(position) {
  // 'Position' is the location in the array
  // Removes the '1' from the array's current position.
  valuesArray[position] = "";

  specialTensObj = {
    "": "ten",
    one: "eleven",
    two: "twelve",
    three: "thirteen",
    four: "fourteen",
    five: "fifteen",
    six: "sixteen",
    seven: "seventeen",
    eight: "eighteen",
    nine: "nineteen",
  };
  // Checks the previous array position value and changes it to the correct value.
  valuesArray[position - 1] = specialTensObj[valuesArray[position - 1]];
}
