// Function to handle the password hack
function hack() {
  // Get the value entered in the password input
  var password = document.getElementById("password").value;

  // Check if the password is correct
  if (password === "shadowiousglitenta400") {
    document.getElementById("hack-message").textContent = "Access granted! Welcome, hacker.";
    // Add your custom functionality here after successful password entry
  } else {
    document.getElementById("hack-message").textContent = "Access denied! Incorrect password.";
  }
}

// Add event listener to the button
document.getElementById("hack-button").addEventListener("click", hack);
