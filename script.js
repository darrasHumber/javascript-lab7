const hoverButton = document.getElementById("hover-button");
const mouseMessage = document.getElementById("mouse-message");

const keyboardInput = document.getElementById("keyboard-input");
const keyboardMessage = document.getElementById("keyboard-message");

// Mouseover event
hoverButton.addEventListener("mouseover", () => {
  mouseMessage.textContent = "Mouse is over the button!";
  mouseMessage.style.color = "#4361ee";
  hoverButton.classList.add("button-hovered");
});

// Mouseout event
hoverButton.addEventListener("mouseout", () => {
  mouseMessage.textContent = "Mouse left the button";
  mouseMessage.style.color = "#f72585";
  hoverButton.classList.remove("button-hovered");
});

// Keydown event
keyboardInput.addEventListener("keydown", (event) => {
  keyboardMessage.textContent = `Key down: ${event.key} (Code: ${event.code})`;
  keyboardMessage.style.color = "#4361ee";
});

// Keyup event - fires when any key is released
keyboardInput.addEventListener("keyup", (event) => {
  keyboardMessage.textContent = `Key up: ${event.key}`;
  keyboardMessage.style.color = "#f72585";
});

// Input event - fires when the value changes (better for tracking input)
keyboardInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  keyboardMessage.textContent = `Current input: ${inputValue}`;
  keyboardMessage.style.color = "#3f37c9";

  // Add visual feedback for long input
  if (inputValue.length > 10) {
    keyboardInput.style.borderColor = "#f72585";
  } else {
    keyboardInput.style.borderColor = "#4361ee";
  }
});
