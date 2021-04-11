// Project title: JSCulator (Simple Javascript Calculator)
// Developer: Omeiza Alabi
// Email: omeizaalabi@gmail.com
// Phone: 07055830564

let buttons = document.querySelectorAll('button')
let screen = document.getElementById('TextOnScreen')
let operator;
let operand1 = 0;
let operand2;
let nextOperand = false;
let restart = true;
let newCalculation = true;
let increment;

screen.innerHTML = operand1

buttons.forEach(button => button.addEventListener("click", function(e) {
    if(!e.target.classList.contains('operator')){
        if(nextOperand == true) {
            screen.innerHTML = ''
            nextOperand = false
        }
        if(restart == true){
            screen.innerHTML = ''
            restart = false
        }
        displayOnScreen(e.target.innerHTML)

    }
    switch(e.target.id) {
        case 'C': 
            clearScreen()
            break;
        case '=':
            calculate()
            break;
        case '.':
            operator = '.'
            break;
        case '+':
            nextOperand = true
            operator = '+'
            determineOperands()
            break;
        case '-':
            nextOperand = true
            operator = '-'
            determineOperands()
            break;
        case '/':
            nextOperand = true
            operator = '/'
            determineOperands()
            break;
        case '*':
            nextOperand = true
            operator = '*'
            determineOperands()
            break;
        case 'del':
            deleteLastElement()
            break;
    }
}))

function clearScreen() {
    restart = true
    screen.innerHTML = '0'
    operand1 = 0
    operand2 = ''
    operator = ''
    nextOperand = false;
    newCalculation = true;
}

function deleteLastElement() {
    let str = screen.innerHTML
    str = str.slice(0, -1)
    console.log(str);
    screen.innerHTML = str
    if(screen.innerHTML == ''){
        screen.innerHTML = '0'
        restart = true
    }
}

function displayOnScreen(text) {
    if(screen.innerHTML == text && text == '.'){
        screen.innerHTML = '.'
    }
    else {
        screen.innerHTML += text
    }
    
}

function determineOperands() {
    operand1 = screen.innerHTML
    nextOperand = true;
}

function convertOperandsToInt(op1, op2) {
    operand1 = parseFloat(op1, 10);
    operand2 = parseFloat(op2, 10);
    return {operand1, operand2}
}

function add(op1, op2) {
    let values = convertOperandsToInt(op1, op2)
    let result = values.operand1 + values.operand2
    displayResult(result)
}

function subtract(op1, op2) {
    let values = convertOperandsToInt(op1, op2)
    let result = values.operand1 - values.operand2
    displayResult(result)
}

function multiply(op1, op2) {
    let values = convertOperandsToInt(op1, op2)
    let result = values.operand1 * values.operand2
    displayResult(result)
}

function divide(op1, op2){
    let values = convertOperandsToInt(op1, op2)
    let result = values.operand1 / values.operand2
    displayResult(result)
}

function displayResult(result) {
    screen.innerHTML = result
}

function calculate() {
    if(newCalculation == true)
    {
        operand2 = screen.innerHTML
        increment = operand2
    }
    else{
        operand1 = screen.innerHTML
        operand2 = increment
    }
    switch(operator) {
        case '+':
            add(operand1, operand2)
            break;
        case '-':
            subtract(operand1, operand2)
            break
        case '/':
            divide(operand1, operand2)
            break;
        case '*':
            multiply(operand1, operand2)
            break;
    }
    newCalculation = false
    
}
