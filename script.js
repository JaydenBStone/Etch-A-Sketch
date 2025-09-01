// DOM

const etchASketch = document.querySelector('.etchASketch');

// Header 
const header = document.createElement('div');
header.classList.add('header');
etchASketch.append(header);
// Title 
const title = document.createElement('div');
title.classList.add('title');
header.append(title);
// Description
const description = document.createElement('div');
description.classList.add('description');
header.append(description);


// Grid Container DOM
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
etchASketch.append(gridContainer);


// Control Panel DOM
const controlPanel = document.createElement('div');
controlPanel.classList.add('controlPanel');
etchASketch.append(controlPanel);





// Fucntions 

