//if the user presses reset button, create a square grid
//of size that the user has specified.
// the reset grid button withh probably take a 
// new grid size parameter..?



function createGrid(size){
    const canvas = document.querySelector('.grid');
    
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
    }

    let rowlist = document.querySelectorAll('.row');

    for(let i = 0; i < size; i++){

        for(let j = 0; j < size; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mousedown', changeColor);
            pixel.addEventListener('mouseenter', changeColor);
            rowlist[i].appendChild(pixel);
        }

        
    }



}


function changeColor(e){
    if(e.buttons === 1){
        e.target.setAttribute('style', `background-color: ${paintColor};`);
    }
}

function clearGrid(){
    let canvas = document.querySelector('.grid');
    let rowlist = document.querySelectorAll('.row');
    rowlist.forEach((item) => {canvas.removeChild(item)} );
}

function resetGrid(){
    clearGrid();
    createGrid(gridSize);
}

function pickInk(e){
    paintColor = e.target.value;
}

function updateGridSizeValue(){
    gridSizeValue.textContent = `Grid size: ${slider.value}`;
}

function changeGridSize(){
    gridSize = slider.value;
    resetGrid();
}


const resetButton = document.querySelector('.reset');
const colorPicker = document.querySelector('#color-picker');
const slider = document.querySelector('.slider');
const gridSizeValue = document.querySelector('.slider-value');
const applyGridSizeButton = document.querySelector('.apply-size');
let paintColor = colorPicker.value;
let gridSize = 10;


gridSizeValue.textContent = `Grid size: ${slider.value}`;
createGrid(gridSize);
resetButton.addEventListener('click',resetGrid);
colorPicker.addEventListener('change', pickInk);
slider.addEventListener('input', updateGridSizeValue);
applyGridSizeButton.addEventListener('click', changeGridSize);





