// Function to handle the password hack
function hack() {
  // Get the value entered in the password input
  var password = document.getElementById("password").value;
  console.log("Entered password:", password); // Debugging log

  // Check if the password is correct
  if (password === "shadowiousglitenta400") {
    document.getElementById("hack-message").textContent = "Access granted! Welcome, hacker. Injecting...";
    console.log("Access granted!"); // Debugging log

    // Flashing text effect
    var flashingText = document.getElementById("hack-message");
    setInterval(function() {
      flashingText.style.visibility = (flashingText.style.visibility === 'hidden' ? '' : 'hidden');
    }, 500);

    // Redirect to secret page after 3 seconds
    setTimeout(function() {
      window.location.href = "shadowious.html";
    }, 3000);
  } else {
    // Flashing text effect
    var allText = document.getElementsByTagName("p");
    setInterval(function() {
      for (var i = 0; i < allText.length; i++) {
        allText[i].style.color = (allText[i].style.color === 'red' ? '' : 'red');
      }
    }, 500);

    // Redirect to YouTube link after 3 seconds
    setTimeout(function() {
      window.location.href = "https://youtu.be/zsYrttbbuPs?si=JCQON0p45XKE_Bf0";
    }, 3000);
  }
}
