document.addEventListener('DOMContentLoaded', function() {
  const password = 'shadowiousglitenta400';
  const container = document.querySelector('main');
  const secretContent = container.innerHTML;
  container.innerHTML = `
    <div class="password-protect">
      <h2>Enter Password to Access Secret Content</h2>
      <input type="password" id="passwordInput" placeholder="Enter password">
      <button id="passwordButton">Submit</button>
      <p id="feedback" style="color: red; display: none;">Incorrect password. Please try again.</p>
    </div>
  `;

  document.getElementById('passwordButton').addEventListener('click', function() {
    const userInput = document.getElementById('passwordInput').value;
    if (userInput === password) {
      container.innerHTML = secretContent;
    } else {
      document.getElementById('feedback').style.display = 'block';
    }
  });
});
