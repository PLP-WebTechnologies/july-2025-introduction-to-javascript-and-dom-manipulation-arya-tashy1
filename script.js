// ========================
// Part 1: Variables & Conditionals
// ========================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "✅ You are an adult!";
  } else if (age > 0) {
    result = "👶 You are still a minor.";
  } else {
    result = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
}

// ========================
// Part 2: Functions
// ========================

// Function 1: Greeting
function showGreeting(name) {
  let message = `Hello, ${name}! Welcome to JavaScript.`;
  document.getElementById("greetingResult").textContent = message;
}

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
// Example usage in console:
// console.log(calculateTotal(50, 3));

// ========================
// Part 3: Loops
// ========================

// Example 1: For loop
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
}

// Example 2: While loop (countdown)
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// ========================
// Part 4: DOM Manipulation
// ========================

// Example 1: Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Change text dynamically
document.getElementById("toggleText").addEventListener("mouseover", function () {
  this.textContent = "✨ You hovered over me!";
});

document.getElementById("toggleText").addEventListener("mouseout", function () {
  this.textContent = "Click the button to toggle my highlight!";
});

// Example 3: Creating new DOM element
let newParagraph = document.createElement("p");
newParagraph.textContent = "📌 This paragraph was added with JavaScript.";
document.body.appendChild(newParagraph);
