document.addEventListener("DOMContentLoaded", function() {
  // Get the password input field and hack button
  const passwordInput = document.getElementById("password");
  const hackButton = document.getElementById("hackButton");

  // Add event listener to the hack button
  hackButton.addEventListener("click", () => {
    const password = passwordInput.value;

    // Check if the entered password is correct
    if (password === "shadow123") {
      // If correct, trigger the hack animation
      hack();
    } else {
      alert("Incorrect password. Access denied!");
    }
  });

  // Function to trigger the hack animation
  function hack() {
    // Simulate hacking process
    alert("Hacking in progress...");
    // Hide the main content and footer temporarily during the hack animation
    const mainContent = document.querySelector("main");
    const footer = document.querySelector("footer");
    mainContent.style.display = "none";
    footer.style.display = "none";

    // Execute the complex animations
    flashLights(5, 200);
    scrollCode();

    // Restore main content and footer after the animation completes
    setTimeout(() => {
      mainContent.style.display = "block";
      footer.style.display = "block";
      alert("Access granted! Welcome, hacker.");
    }, 3000);
  }

  // Function to simulate flashing lights
  function flashLights(iterations, interval) {
    const body = document.querySelector("body");
    let count = 0;
    const flashInterval = setInterval(() => {
      if (count % 2 === 0) {
        body.style.backgroundColor = "#0f0"; // Flash green
      } else {
        body.style.backgroundColor = "#000"; // Restore black
      }
      count++;
      if (count === iterations * 2) {
        clearInterval(flashInterval);
      }
    }, interval);
  }

  // Function to simulate scrolling code
  function scrollCode() {
    const codeArea = document.createElement("div");
    codeArea.innerHTML = `
      <pre>
        // Initializing hack process...
        function hack() {
          // Injecting malicious code...
          console.log("Hacking into mainframe...");
          // Accessing encrypted data...
          console.log("Decrypting security protocols...");
          // Bypassing firewall...
          console.log("Firewall breached. Accessing target system...");
          // Extracting sensitive information...
          console.log("Data extraction complete. Access granted!");
        }
        
        // Initiating hack sequence...
        hack();
      </pre>
    `;
    codeArea.style.overflow = "auto";
    codeArea.style.maxHeight = "200px"; // Limit height to simulate scrolling
    codeArea.style.backgroundColor = "#000";
    codeArea.style.color = "#0f0";
    codeArea.style.padding = "10px";
    codeArea.style.marginTop = "20px";

    const hackSection = document.getElementById("hack");
    hackSection.appendChild(codeArea);

    // Scroll to the bottom of the code area for effect
    codeArea.scrollTop = codeArea.scrollHeight;
  }

});
