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
    if (a == 0 || b == 0) {
        return "ERROR";
    }
    return a / b;
}
function operate(operator, a, b) {
    if (typeof a !== "number" && typeof b !== "number") {
        a = Number(a);
        b = Number(b);
    }



    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);

        case "/":
            let handler = divide(a, b);
            if (handler === "ERROR") {
                return errorHandler();
            }
            else {
                return handler;
            }
    }
}


let firstNumber = 0;
let secondNumber;
let pastOperator, current, currentOperator;
const digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const clearDisplay = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal")
let evaluated = false;
let selected;
let isSelected = false;
let isOff = true;
let HandlerIsOn = false;
let handler1 = document.querySelectorAll(".btn");


for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", () => {
        display.value += digits[i].textContent;

        if (!isOff) {
            refresh();
            isOff = true;
            display.value += digits[i].textContent;
        }

        if (isSelected) {
            secondNumber = display.value;
            console.log(secondNumber)
            if (operators[0].disabled) {
                for (let i = 0; i < operators.length; i++) {
                    operators[i].disabled = false;
                }
            }
        }
    })
}

for (let i = 0; i< operators.length; i++) {
    operators[i].addEventListener("click", () => {    
        currentOperator = operators[i].value;   
        if (!operators[0].disabled) {
            for (let i = 0; i < operators.length; i++) {
                operators[i].disabled = true;
            }
        }
        if (isSelected && !secondNumber == 0) {
            let result = operate(pastOperator, firstNumber, secondNumber);
            refresh();
            display.value = result;
                firstNumber = result;
                isOff = false;
                pastOperator = currentOperator;
                return null; 
        }
        if (!isSelected) {
            isSelected = true;
            pastOperator = currentOperator;
            firstNumber = display.value;
            isOff = false;
            console.log("first: " + firstNumber)
        }
        
        return null

    })
}

function refresh() {
    display.value = "";
}

function clear() {
    refresh();
    firstNumber = 0;
    secondNumber = 0;
    isSelected = false;
    operator = undefined;
    currentOperator = undefined;
    if (operators[0].disabled) {
        for (let i = 0; i < operators.length; i++) {
            operators[i].disabled = false;
        }
    }
    if (handler1[2].disabled) {
        for (let i = 0; i < handler1.length; i++) {
            handler1[i].disabled = false;
        }
    }

}

clearDisplay.addEventListener("click", clear)

equal.addEventListener("click", () => {
    if (firstNumber && secondNumber) {
        display.value = operate(operator, firstNumber, secondNumber)
    }
})

function errorHandler() {
    
    for (let i = 0; i < handler1.length; i++) {
        handler1[i].disabled = true;
    }
    HandlerIsOn = true
    return "ERROR";
}