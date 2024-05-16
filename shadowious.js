function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === '0uHS0x58Mg9sN&rCwwCm**EPC2M@$sHu9^&fh35qNG3b!dauSWtwMM877KTBvgv0') {
        document.getElementById('lore').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
