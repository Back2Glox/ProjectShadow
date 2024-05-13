// Function to handle the password hack
function hack() {
  // Get the value entered in the password input
  var password = document.getElementById("password").value;

  // Check if the password is correct
  if (password === "shadowiousglitenta400") {
    // Flashing effect
    flashingEffect();

    // Display message
    document.getElementById("hack-message").textContent = "Injecting Malware...";

    // Simulate injection process (setTimeout is used as an example, you can replace it with actual code)
    setTimeout(function() {
      document.getElementById("hack-message").textContent = "Access granted! Welcome, hacker.";
      // Add your custom functionality here after successful password entry
    }, 3000); // Change the delay time as needed
  } else {
    document.getElementById("hack-message").textContent = "Access denied! Incorrect password.";
  }
}

// Function to create flashing effect
function flashingEffect() {
  var hackMessage = document.getElementById("hack-message");
  var isVisible = true;

  // Toggle visibility every 500 milliseconds
  var flashingInterval = setInterval(function() {
    if (isVisible) {
      hackMessage.style.visibility = "hidden";
    } else {
      hackMessage.style.visibility = "visible";
    }
    isVisible = !isVisible;
  }, 500);

  // Stop flashing after 3 seconds (3000 milliseconds)
  setTimeout(function() {
    clearInterval(flashingInterval);
    hackMessage.style.visibility = "visible"; // Ensure the message is visible after stopping flashing
  }, 3000);
}

// Placeholder functions for other sections/features

// Function to handle other functionality...
