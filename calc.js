// let btn = document.querySelectorAll("#nos");
// let res = document.querySelector("#res");
// console.dir(btn);
// let string = "";
// Array.from(btn).forEach(element => {
//   element.addEventListener('click', () => {
//     console.dir(this); // or console.dir(event.target);
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    const display = document.getElementById('res');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value >= '0' && value <= '9' || value === '.') {
                currentInput += value;
                display.value = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '0';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    display.value = operate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    currentInput = display.value;
                    previousInput = '';
                    operator = '';
                }
            } else {
                if (currentInput) {
                    if (previousInput) {
                        previousInput = operate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = value;
                }
            }
        });
    });

    function operate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
