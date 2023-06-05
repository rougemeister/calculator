const buttons = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.delete');
const allButtons = document.querySelectorAll('button');

//transform buttons when clicked
for(let button of allButtons){
    button.addEventListener('mousedown', (e)=>{
        e.target.classList.add('transform-button');
    })
}
for(let button of allButtons){
    button.addEventListener('mouseup', (e)=>{
        e.target.classList.remove('transform-button');
    })
}

function deleteAll (){
        const topScreen = document.querySelector('.top');
        const downScreen = document.querySelector('.down');
        topScreen.textContent = '';
        downScreen.textContent = '';
        for(let button of buttons ){
        button.addEventListener('click', getNumber)}
    
}


function getNumber(event){
        let topScreen = document.querySelector('.top');
        topScreen.textContent += event.target.textContent;
        if(topScreen.textContent.length>19){
            for(let button of buttons)button.removeEventListener('click', getNumber)
        }
}


clearButton.addEventListener('click', deleteAll);
for(let button of buttons )button.addEventListener('click', getNumber);