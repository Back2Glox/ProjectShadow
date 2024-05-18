// Drag and drop functionality for the ball
const ball = document.getElementById('draggable-ball');
let isDragging = false;

ball.addEventListener('mousedown', (event) => {
    isDragging = true;
    const offsetX = event.clientX - ball.getBoundingClientRect().left;
    const offsetY = event.clientY - ball.getBoundingClientRect().top;

    const onMouseMove = (moveEvent) => {
        if (isDragging) {
            ball.style.left = `${moveEvent.clientX - offsetX}px`;
            ball.style.top = `${moveEvent.clientY - offsetY}px`;
        }
    };

    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Show popup on click
ball.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.style.left = `${ball.getBoundingClientRect().left + 60}px`;
    popup.style.top = `${ball.getBoundingClientRect().top}px`;
});

// Hide popup when clicking outside
document.addEventListener('click', (event) => {
    const popup = document.getElementById('popup');
    if (!popup.contains(event.target) && !ball.contains(event.target)) {
        popup.style.display = 'none';
    }
});
