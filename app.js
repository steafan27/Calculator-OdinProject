let currentNumber = '';
let previousNumber = '';
let operator = '';

const displayTop = document.querySelector('.top-number');
const displayBottom = document.querySelector('.bottom-number');

const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click' , clearAll);

const deleteBtn = document.querySelector('.delete');

const decimalBtn = document.querySelector('.decimal');

const equalBtn = document.querySelector('.equals');
equalBtn.addEventListener('click' , calculate);

numberBtn.forEach( btn => btn.addEventListener('click', numberHandler));
function numberHandler(e) {
    currentNumber += e.target.textContent;
    if(currentNumber.length < 26){
        displayBottom.textContent = `${currentNumber}`;
    };
};

operatorBtn.forEach( btn => btn.addEventListener('click' , operatorHandler));
function operatorHandler(e) {
    operator = e.target.textContent;
    previousNumber = currentNumber;
    displayTop.textContent = `${previousNumber} ${operator}`;
    currentNumber = '';
    displayBottom.textContent = '';
};

function calculate() {
    currentNumber = Number(currentNumber);
    previousNumber = Number(previousNumber);

    if(operator === '+'){
        displayBottom.textContent = `${currentNumber + previousNumber}`;
        
    }else if(operator === '-'){
        displayBottom.textContent = `${previousNumber - currentNumber}`;

    }else if(operator === 'X'){
        displayBottom.textContent = `${previousNumber * currentNumber}`;

    }else if(operator === '/'){
        if(!currentNumber){
            displayBottom.textContent = `Error`;
        }else{
            displayBottom.textContent = `${previousNumber / currentNumber}`;
        }
        
    }else if(operator === '^n'){
        displayBottom.textContent = `${previousNumber ** currentNumber}`;

    };

};

function clearAll() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    displayTop.textContent = '';
    displayBottom.textContent = '';

};