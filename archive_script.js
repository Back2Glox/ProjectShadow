document.getElementById('reveal-button').addEventListener('click', () => {
    const password = prompt('Enter the password to reveal the secret lore:');
    if (password === 'shadow') {
        document.getElementById('secret-lore').style.display = 'block';
    } else {
        alert('Incorrect password.');
    }
});

const draggableBall = document.getElementById('draggable-ball');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');

draggableBall.addEventListener('click', () => {
    popup.style.display = 'block';
});

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

draggableBall.addEventListener('mousedown', function(e) {
    const shiftX = e.clientX - draggableBall.getBoundingClientRect().left;
    const shiftY = e.clientY - draggableBall.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        draggableBall.style.left = pageX - shiftX + 'px';
        draggableBall.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    draggableBall.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        draggableBall.onmouseup = null;
    };
});

draggableBall.ondragstart = function() {
    return false;
};
