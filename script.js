function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a * b;
}
function operate(operator, a, b) {
    
}


let firstNumber, operator, secondNumber;
let digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const clearDisplay = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");


operators.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (display.value == undefined || display.value == null) {
            firstNumber = 0;
        }    
        else {
            firstNumber = display.value;
            operator = symbol.value;
        }
        
    })
})


digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        return display.value += digit.textContent;
    })
})

clearDisplay.addEventListener("click", () => display.value = "");
