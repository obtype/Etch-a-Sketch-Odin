//if the user presses reset button, create a square grid
//of size that the user has specified.
// the reset grid button withh probably take a 
// new grid size parameter..?



function createGrid(size){
    const canvas = document.querySelector('.grid');
    let row = document.createElement('div');
    row.classList.add('row');
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    //canvas.appendChild(pixel);
    

    for(let i = 0; i < size; i++){
        row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
    }

    let rowlist = document.querySelectorAll('.row');

    for(let i = 0; i < size; i++){

        for(let j = 0; j < size; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            //pixel.addEventListener('mousedown', console.log);
            pixel.addEventListener('mouseenter', changeColor);
            rowlist[i].appendChild(pixel);
        }

        
    }



}


function changeColor(e){
    if(e.buttons === 1){
        e.target.setAttribute('style', 'background-color: black;');
        console.log(123);
    }
}

let paintColor = '#ff0000';

createGrid(10);

//create