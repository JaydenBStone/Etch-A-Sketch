// DOM

const etchASketch = document.querySelector('.etchASketch');

const header = createDiv('header', etchASketch);
const title = createDiv('title', header);
const description = createDiv('description', header);

const gridContainer = createDiv('gridContainer', etchASketch);
const controlPanel = createDiv('controlPanel', etchASketch);



// Fucntions 


// DOM Div Function
function createDiv(className, parent ){
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
      createDiv('gridColumn', gridRow);
    }
  }
}

const sizeSlider = document.createElement('input');
sizeSlider.classList.add('sizeSlider');
controlPanel.append(sizeSlider)

sizeSlider.type = 'range';
sizeSlider.value = 16;
sizeSlider.min = 2;
sizeSlider.max = 32;

// input also works instead of change if you want the grid to show changes as its happening not after release 
sizeSlider.addEventListener ('change', () => {
  const gridSize = sizeSlider.value;
  gridCreate(gridSize);
})

gridCreate(sizeSlider.value)