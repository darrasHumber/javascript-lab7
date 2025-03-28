const hoverButton = document.getElementById("hover-button");
const mouseMessage = document.getElementById("mouse-message");

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
