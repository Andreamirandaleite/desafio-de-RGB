const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const colorDisplay = document.getElementById('colorDisplay');

function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Actualiza el color de fondo
    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Actualiza los valores mostrados
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
}

// Agrega un evento 'input' a cada control deslizante
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
