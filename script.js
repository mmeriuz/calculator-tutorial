let runningTotal = 0

// the value that is displayed on the calculator UI
let buffer = "0"
const screen = document.querySelector(".answer");

// + - / * = -- delete input
// numbers   -- add input

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => number.addEventListener("click", function(event) {
    addNumberToUI(event.target.innerText);
}));

function addNumberToUI(number) {
    handleNumber(number);
    rerender();
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }
    else{
        buffer += value;
    }
}

let previousOperator = ""

// Array<Elements>
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        handleOperator(event.target.innerText);
    })
})

function handleOperator(operator) {
    if(operator === "C"){
        buffer = "0";
    }
    if(operator === "←"){
        if(buffer.length === 1){
            buffer = "0"
        }
        else{
            buffer = buffer.slice(0, -1);
        }
    }
    if(operator === "+"){
        runningTotal = parseInt(buffer);
        buffer = "";
    }
    if(operator === "÷"){
        runningTotal = parseInt(buffer);
        buffer = "";
    }
    if(operator === "-"){
        runningTotal = parseInt(buffer);
        buffer = "";
    }
    if(operator === "×"){
        runningTotal = parseInt(buffer);
        buffer = "";
    }

    if(operator === "="){
        console.log(previousOperator);
        if(previousOperator === "+") buffer = String(Number(buffer) + runningTotal);
        if(previousOperator === "÷") buffer = String(runningTotal / Number(buffer));
        if(previousOperator === "-") buffer = String(Number(buffer) - runningTotal);
        if(previousOperator === "×") buffer = String(Number(buffer) * runningTotal);
        runningTotal = 0;
        previousOperator = "";
    }

    previousOperator = operator;
    rerender();
}


function rerender(){
    // update the HTML
    screen.innerText = buffer;
}