// script.js
// Get the password input field and hack button
const passwordInput = document.getElementById("password");
const hackButton = document.getElementById("hackButton");

// Add event listener to the hack button
hackButton.addEventListener("click", () => {
  const password = passwordInput.value;

  // Check if the entered password is correct
  if (password === "&beGn^f&P9*L32C&t%AZEd*E#qnAiW23!FxveVjLJFWrsP3gZgqt9PsKP22kYV9t8cQSANshJ#awtZz#") {
    // If correct, trigger the hack animation
    hack();
  } else {
    alert("Incorrect password. Access denied!");
  }
});

// Function to trigger the hack animation
function hack() {
  // Simulate hacking process (e.g., flashing lights, scrolling code)
  alert("Hacking in progress...");
  // You can add more complex animation effects here
  // For simplicity, we'll just show an alert
  alert("Access granted! Welcome, hacker.");
}

