
//let userInput = 10;
const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clearBtn');
const btnContainer = document.querySelector('.btn-container');
let userColor = 'yellow';
let box = [];

window.onload = gridMaker(15);

//making the grid
function gridMaker(userInput){
    for(let i = 0;i <userInput*userInput;i++){
        let div = document.createElement('div');
        div.classList.add('box');
        container.style.gridTemplateColumns = `repeat(${userInput},1fr)`;
        container.style.gridTemplateRows = `repeat(${userInput},1fr)`;
        container.appendChild(div);
        
        mouseEvent();
    }
}

// //clearing and asking user for no. of boxes in grid
 function clearAll(){
     box.forEach((box) => box.style.backgroundColor = 'white');
 }
function resolution(){
    //removing boxes
    let arrayOfBoxes = Array.from(document.querySelectorAll('.box'));
    arrayOfBoxes.forEach((box) => container.removeChild(box));
    
    //new input
    let userInput = prompt('Enter no. of boxes you want on each side (less than 100)',10);  
    while(userInput>50 || userInput == 0){
        userInput = prompt('Enter no. of boxes you want on each side',10);
    }
    if(userInput == null){
        userInput = 15;
    }
    userColor = 'yellow';
    gridMaker(userInput);    
}
//random color generator
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//color selection
function colorSelect(e){
    e.target.style.backgroundColor = userColor;
}

//coloring
function mouseEvent(){
    box = Array.from(document.querySelectorAll('.box'));
    box.forEach((box) => box.addEventListener('mouseover',colorSelect));
}

btnContainer.addEventListener('click',(e) => {
    if(e.target.id === 'resolution'){
        resolution();
    }else if(e.target.id === 'random'){
        userColor = randomColor();
    }else if(e.target.id=='clearAll'){
        clearAll();
    }
    else{userColor = e.target.id}
});