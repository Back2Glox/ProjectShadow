// shadowious.js

document.addEventListener("DOMContentLoaded", function() {
  var storySection = document.getElementById("story");
  var passwordForm = document.getElementById("passwordForm");
  var passwordInput = document.getElementById("passwordInput");

  passwordForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered password
    var password = passwordInput.value;

    // Validate the password
    if (password === "shadowiousglitenta400") {
      // If the password is correct, show the story section and hide the password form
      storySection.style.display = "block";
      passwordForm.style.display = "none";
    } else {
      // If the password is incorrect, display error message
      showError();
    }
  });

  // Function to show error message
  function showError() {
    var errorMessage = document.createElement("div");
    errorMessage.textContent = "Incorrect password. Please try again.";
    errorMessage.style.color = "red";
    passwordForm.appendChild(errorMessage);

    // Clear error message after 3 seconds
    setTimeout(function() {
      errorMessage.remove();
    }, 3000);
  }
});
