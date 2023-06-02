const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.delete')

clearButton.addEventListener('click', deleteAll)

function deleteAll (){
        const topScreen = document.querySelector('.top');
        const downScreen = document.querySelector('.down');
        topScreen.textContent = '';
        downScreen.textContent = '';
        downScreen.style.display = 'block'
        for(let button of buttons )button.addEventListener('click', addNumbers)
    
}

for(let button of buttons )button.addEventListener('click', addNumbers)


function addNumbers (event){
        let downScreen = document.querySelector('.down');
        let topScreen = document.querySelector('.top');
        downScreen.textContent += event.target.textContent;
        if(downScreen.textContent.length > 8){
            topScreen.textContent = downScreen.textContent;
            downScreen.style.display = 'none'
        }
        if(downScreen.textContent.length>19){
            for(let button of buttons)button.removeEventListener('click', addNumbers)
        }
}


