let display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operation = null;

function appendNumber(number) {
    console.log(`Number clicked: ${number}`);
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        case "*":
            computation = prev * current;
            break;
        case "/":
            computation = current === 0 ? "Error" : prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = "";
    updateDisplay();
}

function clearDisplay() {
    currentOperand = "";
    previousOperand = "";
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand || "0";
}
