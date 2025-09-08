// DOM

const etchASketch = document.querySelector('.etchASketch');

const header = createDiv('header', etchASketch);
const title = createDiv('title', header);
const description = createDiv('description', header);

const gridContainer = createDiv('gridContainer', etchASketch);
const controlPanel = createDiv('controlPanel', etchASketch);

const sliderDiv = createDiv('sliderDiv', controlPanel)
const sliderValueDislpay = createDiv('sliderValueDislpay', sliderDiv)
const buttonDiv = createDiv('buttonDiv', controlPanel)
const pickerDiv = createDiv('pickerDiv', controlPanel);
let currentColor = '#000000'; // default black

title.textContent = 'Etch-A-Sketch'

// DOM Div Function
function createDiv(className, parent) {
  const div = document.createElement('div');
  div.classList.add(className);
  parent.append(div)
  return div
}

// Create Grid & Size Slider 
function gridCreate(gridSize) {
  gridContainer.innerHTML = '';
  for (let i = 0; i < gridSize; i++) {
    const gridRow = createDiv('gridRow', gridContainer);
    for (let k = 0; k < gridSize; k++) {
      const gridSquare = createDiv('gridSquare', gridRow);
      gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor = currentColor;
      })
    }
  }
}

// sizeSlider input 
const sizeSlider = document.createElement('input');
sizeSlider.classList.add('sizeSlider');
sliderDiv.append(sizeSlider)

sizeSlider.type = 'range';
sizeSlider.value = 16;
sizeSlider.min = 2;
sizeSlider.max = 32;

// input also works instead of change if you want the grid to show changes as its happening not after release 
sizeSlider.addEventListener('change', () => {
  const gridSize = Number(sizeSlider.value);
  gridCreate(gridSize);
  sliderValue = sliderValueDislpay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
})

gridCreate(sizeSlider.value)

// Display Slider Value
let sliderValue = sliderValueDislpay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;


// colorPicker input 
const colorPicker = document.createElement('input');
colorPicker.classList.add('colorPicker');
colorPicker.type = 'color';
colorPicker.value = '#000000'
pickerDiv.append(colorPicker)

colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
})

// Reset Button
const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = 'ResetGrid'
buttonDiv.append(resetButton);

resetButton.addEventListener('click', () => {
  sizeSlider.value = 16;
  gridCreate(Number(sizeSlider.value));
  currentColor ='#000000';
  colorPicker.value = '#000000'
  sliderValue = sliderValueDislpay.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
})

// Clear Button
const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'ClearGrid'
buttonDiv.append(clearButton);

clearButton.addEventListener('click', () => {
   gridCreate(Number(sizeSlider.value));
})
