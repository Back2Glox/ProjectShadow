const correctPassword = '0uHS0x58Mg9sN&rCwwCm**EPC2M@$sHu9^&fh35qNG3b!dauSWtwMM877KTBvgv0'; // Change this to your actual password

function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === correctPassword) {
        document.getElementById('lore').style.display = 'block';
        document.getElementById('password').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
