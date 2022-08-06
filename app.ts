let button = document.getElementById('button')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function sumNumbers(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  }
  else {
    return Number(num1) + Number(num2)
  }
}

button.addEventListener('click', () => {
  console.log(sumNumbers(input1.value, input2.value))
})