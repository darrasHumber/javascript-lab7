const hoverButton = document.getElementById("hover-button");
const mouseMessage = document.getElementById("mouse-message");

const keyboardInput = document.getElementById("keyboard-input");
const keyboardMessage = document.getElementById("keyboard-message");

const demoForm = document.getElementById("demo-form");
const formMessage = document.getElementById("form-message");

const focusInput = document.getElementById("focus-input");
const focusMessage = document.getElementById("focus-message");

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

// Form submission handler
demoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form values
  const formData = new FormData(demoForm);
  const name = formData.get("name");
  const email = formData.get("email");

  // Validate inputs
  if (!name || !email) {
    formMessage.textContent = "Please fill in all fields!";
    formMessage.style.color = "#f72585";
    return;
  }

  // Validate email format
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    formMessage.textContent = "Please enter a valid email address!";
    formMessage.style.color = "#f72585";
    return;
  }

  // Success message
  formMessage.innerHTML = `
        <strong>Form submitted successfully!</strong><br>
        Name: ${name}<br>
        Email: ${email}
    `;
  formMessage.style.color = "#4361ee";

  // Add visual feedback
  formMessage.classList.add("form-success");
  demoForm.reset();

  // Simulate API call
  simulateSubmission(name, email);
});

// Form reset handler
demoForm.addEventListener("reset", () => {
  formMessage.textContent = "Form has been reset";
  formMessage.style.color = "#6c757d";
  formMessage.classList.remove("form-success");
});

// Input validation on blur
demoForm
  .querySelector('input[name="name"]')
  .addEventListener("blur", (event) => {
    if (!event.target.value) {
      event.target.classList.add("input-error");
    } else {
      event.target.classList.remove("input-error");
    }
  });

demoForm
  .querySelector('input[name="email"]')
  .addEventListener("blur", (event) => {
    const email = event.target.value;
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      event.target.classList.add("input-error");
    } else {
      event.target.classList.remove("input-error");
    }
  });

// Simulate form submission to an API
function simulateSubmission(name, email) {
  formMessage.textContent = "Submitting form data...";

  // Simulate network request
  setTimeout(() => {
    formMessage.innerHTML = `
            <strong>Submission complete!</strong><br>
            Thank you, ${name}! We've received your details.<br>
            A confirmation has been sent to ${email}.
        `;
    formMessage.classList.add("form-success");
  }, 1500);
}

// Focus event - when element gains focus
focusInput.addEventListener("focus", () => {
  focusMessage.textContent = "Input field is now focused";
  focusMessage.style.color = "#4361ee";
  focusInput.style.borderColor = "#4361ee";
  focusInput.style.backgroundColor = "#f8f9fa";
});

// Blur event - when element loses focus
focusInput.addEventListener("blur", () => {
  focusMessage.textContent = "Input field lost focus";
  focusMessage.style.color = "#6c757d";
  focusInput.style.borderColor = "#ced4da";
  focusInput.style.backgroundColor = "white";

  // Validate on blur
  if (focusInput.value.trim() === "") {
    focusInput.style.borderColor = "#f72585";
    focusMessage.textContent = "This field cannot be empty!";
    focusMessage.style.color = "#f72585";
  }
});

// Bonus: Input validation while typing
focusInput.addEventListener("input", () => {
  if (focusInput.value.trim() !== "") {
    focusInput.style.borderColor = "#4361ee";
    focusMessage.textContent = "Typing...";
    focusMessage.style.color = "#4361ee";
  }
});
