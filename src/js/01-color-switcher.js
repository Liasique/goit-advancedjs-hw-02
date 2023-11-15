const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorChangeInterval = null;

stopButton.disabled = true;

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;

    colorChangeInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(colorChangeInterval);
    colorChangeInterval = null;

    startButton.disabled = false;
    stopButton.disabled = true;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
