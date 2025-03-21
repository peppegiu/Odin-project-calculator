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
            return divide(a, b);
    }
}


let firstNumber, operator, secondNumber;
let digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const clearDisplay = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal")

operators.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (display.value == undefined || display.value == null) {
            firstNumber = 0;
        }    
        else {
            firstNumber = display.value;
            clear()
            operator = symbol.value;
        }

    })
})


digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        return display.value += digit.textContent;
    })
})

clearDisplay.addEventListener("click", clear);

function clear() {
    return display.value = "";
}


equal.addEventListener("click", () => {
    if (display.value == null || display.value == undefined) {
        secondNumber = firstNumber;
    }
    else {
        secondNumber = display.value;
    }
    let result = operate(operator, firstNumber, secondNumber);
    display.value = result
})
