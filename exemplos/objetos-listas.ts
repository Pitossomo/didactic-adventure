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