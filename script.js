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
            return divide(a, b);
    }
}


let firstNumber = 0
let operator, secondNumber, current, result1;
let digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const clearDisplay = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal")
let evaluated = false;
let Selected, isSelected;


for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", () => {
        display.value += digits[i].textContent;
    })
}


