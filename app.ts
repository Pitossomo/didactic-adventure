let button = document.getElementById('button')
let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement

function sumNumbers(
  num1: number, num2: number,
  frase: string,
  mustPrint: boolean = true
) {
  const sum = Number(num1) + Number(num2) 
  if (mustPrint) console.log(frase+sum)
  return sum
}

if (button) button.addEventListener('click', () => {
  if (input1 && input2)
  sumNumbers(Number(input1.value), Number(input2.value), "O valor é: ", true)
})