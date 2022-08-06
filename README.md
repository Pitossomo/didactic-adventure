# Início prático com JS

## Iniciando o Projeto
- Inicialmente, criamos o diretório
- Dentro do novo diretório, iniciamos o projeto node com `npm init`
- Criar o .gitignore
- Instalar o typescript `npm i -D typescript` 
- Instalar o lite-server `npm i -D lite-server`
- Criar o script para o lite-server no package.json `"start: "lite-server"`
  - O lite-server procura o arquivo *index.html* e realiza testes
- Criar o *index.html* para o lite-server com o atalho `html:5` no VSCode
- Código commitado
-----
## Criando uma aplicação simples com JS
- Atualizar o *index.html* com dois campos *input* e um botão:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="app.js" defer></script>
    </head>
    <body>
      <input id="input1" />
      <input id="input2" />
      <button id="button">Clique Aqui</button>
    </body>
  </html>
  ```
- Criar o *app.js*, que exibirá no console a soma dos dois inputs quando o botão for clicado
  ```js
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
  ```
- Observa-se que foi necessário criarmos uma validação dos dados.
- Criar um arquivo app.ts na raíz para iniciar a refatoração, e arquivar o arquivo app.js original.
- Código Comittado. 
-----
