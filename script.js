const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.delete');
const allButtons = document.querySelectorAll('button');
const equalToButton = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator');



function clearAll (){
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

function backspace(){
    let topScreen = document.querySelector('.top');
    const arr = Array.from(topScreen.textContent);
    arr.pop();
    topScreen.textContent = arr.join('');

for(let button of buttons )button.addEventListener('click', getNumber);
}


//transform buttons when clicked
for(let button of allButtons){
    button.addEventListener('mousedown', (e)=>{
        e.target.classList.add('transform-button');

        if(e.target.classList.contains('operator')){
            e.target.classList.remove('transform-button')
            e.target.classList.add('operator-transform');
        }else if(e.target.classList.contains('delete')){
            e.target.classList.remove('transform-button')
            e.target.classList.add('delete-transform');
        }else if(e.target.classList.contains('clear')){
            e.target.classList.remove('transform-button')
            e.target.classList.add('clear-transform');
        }else if(e.target.classList.contains('equals')){
            e.target.classList.remove('transform-button')
            e.target.classList.add('equals-transform');
        }
    
})}
for(let button of allButtons){
    button.addEventListener('mouseup', (e)=>{
        e.target.classList.remove('transform-button'); 
        
        if(e.target.classList.contains('operator')){
            e.target.classList.remove('operator-transform');
        }else if(e.target.classList.contains('delete')){
            e.target.classList.remove('delete-transform');
        }else if(e.target.classList.contains('clear')){
            e.target.classList.remove('clear-transform');
        }else if(e.target.classList.contains('equals')){
            e.target.classList.remove('equals-transform');
        }
    })
}

equalToButton.addEventListener('click', calculate);

function calculate(){
    const topScreen = document.querySelector('.top');
    const downScreen = document.querySelector('.down');
    


    let topScreenContent = topScreen.textContent;
    switch(true){
        case topScreenContent.includes('+'):
            let [addendOne, addendTwo] = topScreenContent.split('+');
            let sum = operate('+', addendOne, addendTwo);
            downScreen.textContent = sum;
            topScreenContent = sum;
            break;
        case topScreenContent.includes('-'):
            let [minuend, subtrahend] = topScreenContent.split('-')
            difference = operate('-', minuend, subtrahend);
            downScreen.textContent = difference;
            break;
        case topScreenContent.includes('x'):
            let [multiplicand, multiplier] = topScreenContent.split('x');
            let product = operate('x', multiplicand, multiplier);
            downScreen.textContent = product;
            break;
        case topScreenContent.includes('÷'):
            let [dividend, divisor] = topScreenContent.split('÷');
            let quotient = operate('÷', dividend, divisor);
            downScreen.textContent = quotient; 
            
    }
}

function operate(operator, firstNum, secondNum){
    
    let results;
    switch(operator){
        case '+': 
        results = Number(firstNum) + Number(secondNum);
        break;
        case '-': 
        results = Number(firstNum) - Number(secondNum);
        break;
        case 'x':
        results = Number(firstNum) * Number(secondNum);
        break;
        case '÷':
        results = Number(firstNum) / Number(secondNum);
    }
    if(results.toString() === "NaN"){
       return results = 'Syntax Error'
    }
    if(results.toString().length>9){
        return results = results.toExponential(5)
    }
    
    return results;
}




  
for(let button of buttons )button.addEventListener('click', getNumber);
clearButton.addEventListener('click', clearAll);
backspaceButton.addEventListener('click', backspace);

