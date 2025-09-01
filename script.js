// DOM

const etchASketch = document.querySelector('.etchASketch');

const header = createDiv('header', etchASketch);
const title = createDiv('title', header);
const description = createDiv('description', header);

const gridContainer = createDiv('gridContainer', etchASketch);
const controlPanel = createDiv('controlPanel', etchASketch);

let size = 10;


// Create Button to reset 
// Create Slider to pick size - give value to gridCreate()
//         - displays the px x px size overhead 
// Create Color Picker 
//         - have a display that you click and shows an rbg color picker winow (check michalosman on community projects)
// Create Reset button
// 
// 
// 

// Fucntions 
// DOM Div Function
function createDiv(className, parent ){
  const div = document.createElement('div');
  div.classList.add(className);
  parent.append(div)
  return div
}

// Create gridRow 
function gridCreate() {
  for (let i = 0; i < size; i++) {
    const gridRow = createDiv('gridRow', gridContainer);
    for (let k = 0; k < size; k++) {
      createDiv('gridColumn', gridRow);
    }
  }
}

gridCreate()