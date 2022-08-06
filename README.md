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
## Refatorando para Typescript

- Criar o tsconfig.json com `tsc --init`
- Refatorar o código anterior para Typescript
  ```ts
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
  ```
- Criar o script para compilar e rodar o código TS `"watch": "tsc --watch"`
- Compilar o código `npm run watch`
- Rodar novamente o servidor `npm start`
- Checar no localhost se tudo ok
- Código compilado (x2)!
-----
## Enums e interfaces
- Arquivar o arquivo app.ts original e criar um novo com interfaces customizadas:
  ```ts
  enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
  }

  interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
  }

  interface Estudante extends Pessoa {
    materias: string[]
  }

  const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 32,
    profissao: Profissao.Desenvolvedora
  }

  const jessica: Estudante = {
    nome: 'Jessica',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
    materias: ['Cálculo', 'Álgebra Linear', 'História do Samba e Pagode', 'Formação de Plateia']
  }

  function listar(lista: string[]) {
    for (const item of lista) {
      console.log('- ', item)
    }
  }

  listar(jessica.materias)
  ```
- Código compilado
-----
## Any e Unknown 
- Variáveis com o tipo `any` podem receber qualquer tipo, removendo todas as vantagens do Typescript - logo, deve ser evitado sempre que possível
- O tipo `unknown` é similar ao *any* com uma diferença: ao atribuírmos seu valor a outra variável, o Typescript nos obriga a realizar uma validação do tipo
  ```ts
    let unknownValue = 3
    unknownValue = 'olá'
    unknownValue = true

    // let stringTest: string = unknonwnValue     // Essa linha não permitirá a compilação, temos que validar o unknownValue primeiro
    let stringTest: string = (typeof unknownValue === 'string')
      ? unknownValue
      : 'o valor desconhecido não é uma string'
  ```
-----
## Tipos customizados
- Podemos criar tipos customizados
  ```ts
  type input = number | string    // O tipo input pode ser um number OU um string
  ```
## Trabalhando com funções
- Em funções complexas, podemos tipar seu retorno para evitar erros:
```ts
  function soma(n1: number, n2: number): number {
    return n1+n2
  }

  function logSoma(n1: number, n2: number): void {
    console.log(n1+n2)
  }
```
- Podemos também tipar as funções callback e arrow functions
```ts
  function somaETrata(num1: number, num2: number, callback: (value: number) => number): number {
    let sum = num1 + num2
    return callback(sum)
  }

  function aoQuadrado(num): number {
    return num*num
  }

  console.log(somaETrata(2, 3, aoQuadrado)) // Loga 5*5 = 25
```
## Referências
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
## Configuração do projeto
- O arquivo `tsconfig.json` dita como a validação será feita pelo Typescript
- Propriedades importantes do arquivo *tsconfig.json*:
  - "target"
    - Informa qual a versão do Javascript para qual o Typescript será transpilado
    - Exemplo de valor: "es2015"
  - "lib"
    - Informa quais as biblioteca serão usadas
    - Exemplo: ["DOM", "es2020"]
  - "outDir"
    - Informa o diretório no qual os arquivos transpilados estarão no seu projeto
    - Exemplo: "dist"
  - "rootDir"
    - Informa o diretório onde está o código a ser transpilado
    - Exemplo: "src"
  - "include"
    - Padrão do nome dos arquivos a serem transpilados
    - Exemplo: ["src/**/*.ts"]
  - "exclude"
    - Padrão de nome dos arquivos que não deverão ser transpilados
    - Exemplo: ["tests.ts"]
  - "noImplicitAny"
    - Boolean que permite ou não o uso implícito do tipo any
  - "strictNullCheck"
    - Boolean que certifica que há checagem quanto a tipos possivelmente nulos


  