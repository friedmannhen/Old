// Array to store picked numbers
var pickedNumbers = [];
var MaxNumber = 0;
var roll = document.querySelector(".container");
roll.classList.add("roll-btn-hide");
function startGame() {
  MaxNumber = document.getElementById("max").value;
  for (let i = 1; i < parseInt(MaxNumber) + 1; i++) {
    console.log(i);
    var numberList = document.getElementById("number-list");
    var numberElement = document.createElement("div");
    numberElement.className = "number";
    numberElement.textContent = i;
    numberList.appendChild(numberElement);
  }
  document.getElementById("rules").classList.add("roll-btn-hide");
  roll.classList.remove("roll-btn-hide");
  roll.classList.add("roll-btn-show");
}

// Generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * MaxNumber) + 1;
}

// Generate a new number and display it
function generateNumber() {
  roll.classList.remove("roll-btn-show");
  roll.classList.add("roll-btn-hide");
    
  document.querySelector(".reset").disabled = true;
  // Check if all numbers have been picked
  if (pickedNumbers.length === 100) {
    alert("All numbers have been picked!");
    return;
  }

  // Disable generate number button during animation
  var generateButton = document.querySelector("button");
  generateButton.disabled = true;

  // Start displaying random numbers 
  var startTime = Date.now();
  var interval = setInterval(function () {
    // Generate a new random number
    var number = generateRandomNumber();

    // Check if the number has already been picked
    if (pickedNumbers.includes(number)) {
      return;
    }

    // Display the number
    var numberDisplay = document.getElementById("number-display");
    numberDisplay.textContent = number;
  }, 80); // Display a new number every 0.1 second

  // Stop displaying random numbers after 5 seconds
  setTimeout(function () {
    clearInterval(interval);

    // Generate a new number
    var number = generateRandomNumber();

    // Check if the number has already been picked
    if (pickedNumbers.includes(number)) {
      generateNumber(); // Generate another number if already picked
      return;
    }
    // Add the number to the picked numbers array
    pickedNumbers.push(number);
    var numberDisplay = document.getElementById("number-display");
    numberDisplay.textContent = number;
    var pickedNumber = document.querySelectorAll(".number");
    pickedNumber[number - 1].classList.add("selected");
    // Enable generate number button after displaying chosen number
    generateButton.disabled = false;
    document.querySelector(".reset").disabled = false;
    roll.classList.remove("roll-btn-hide");
    roll.classList.add("roll-btn-show");
  }, 5000);
}

// Reset the game
function resetGame() {
  roll.classList.add("roll-btn-hide");
  document.getElementById("rules").classList.remove("roll-btn-hide");
  document.getElementById("rules").classList.add("roll-btn-show");

  // Clear the picked numbers array
  pickedNumbers = [];

  // Clear the number display
  var numberDisplay = document.getElementById("number-display");
  numberDisplay.textContent = "";

  // Clear the picked numbers list
  var numberList = document.getElementById("number-list");
  numberList.innerHTML = "";
}
