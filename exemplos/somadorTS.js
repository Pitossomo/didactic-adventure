"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function sumNumbers(num1, num2, frase, mustPrint = true) {
    const sum = Number(num1) + Number(num2);
    if (mustPrint)
        console.log(frase + sum);
    return sum;
}
if (button)
    button.addEventListener('click', () => {
        if (input1 && input2)
            sumNumbers(Number(input1.value), Number(input2.value), "O valor é: ", true);
    });
