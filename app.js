let currentNumber = '';
let previousNumber = '';
let operator = '';
let total = 0;

const displayTop = document.querySelector('.top-number');
const displayBottom = document.querySelector('.bottom-number');

const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click' , clearAll);

const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click' , deleteNumber);

const decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click' , addDecimal);

const equalBtn = document.querySelector('.equals');
equalBtn.addEventListener('click' , calculate);

numberBtn.forEach( btn => btn.addEventListener('click', numberHandler));
function numberHandler(e) {
    currentNumber += e.target.textContent;
    if(currentNumber.length < 26){
        displayBottom.textContent = `${currentNumber}`;
    }};

operatorBtn.forEach( btn => btn.addEventListener('click' , operatorHandler));
function operatorHandler(e) {
    operator = e.target.textContent;
    previousNumber = currentNumber;
    if(total) previousNumber = total;
    displayTop.textContent = `${previousNumber} ${operator}`;
    currentNumber = '';
    displayBottom.textContent = '';
};

function addDecimal() {
    if(!currentNumber) {
        currentNumber = '0.'
    }else if(currentNumber) {
        currentNumber += '.'
    }};

function calculate() {
    currentNumber = Number(currentNumber);
    previousNumber = Number(previousNumber);

    if(operator === '+'){
        displayBottom.textContent = `${currentNumber + previousNumber}`;
        displayTop.textContent = `${previousNumber} ${operator} ${currentNumber}`
        total = (currentNumber + previousNumber);
        
    }else if(operator === '-'){
        displayBottom.textContent = `${previousNumber - currentNumber}`;
        displayTop.textContent = `${previousNumber} ${operator} ${currentNumber}`;
        total = (previousNumber - currentNumber);


    }else if(operator === 'X'){
        displayBottom.textContent = `${previousNumber * currentNumber}`;
        displayTop.textContent = `${previousNumber} ${operator} ${currentNumber}`;
        total = (currentNumber * previousNumber);


    }else if(operator === '/'){
        if(!currentNumber){
            displayBottom.textContent = `Error`;
        }else {
            displayBottom.textContent = `${previousNumber / currentNumber}`;
            displayTop.textContent = `${previousNumber} ${operator} ${currentNumber}`;
            total = (previousNumber / currentNumber);
        };

    }else if(operator === '^n'){
        displayBottom.textContent = `${previousNumber ** currentNumber}`;
        displayTop.textContent = `${previousNumber} ${operator} ${currentNumber}`;
        total = (previousNumber ** currentNumber);
    }};

function deleteNumber() {
    let currentNumberPlaceHolder
    if(currentNumber) {
        currentNumberPlaceHolder = currentNumber.split('');
        currentNumberPlaceHolder.pop();
        currentNumber = currentNumberPlaceHolder.join('');
        displayBottom.textContent = `${currentNumber}`; 
    }};

function clearAll() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    total = 0;
    displayTop.textContent = '';
    displayBottom.textContent = '';
};