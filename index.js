const perguntas = [
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      'Retorna o tipo de dados de uma variável ou expressão.',
      'Converte uma variável para o tipo booleano.',
      'Concatena duas strings.'
    ],
    correta: 0
  },
  {
    pergunta:
      'Qual dessas opções é uma maneira correta de declarar uma variável em JavaScript?',
    respostas: ['variable x = 5;', 'let x = 5;', 'const x = 5;'],
    correta: 1
  },
  {
    pergunta: "O que o método 'forEach()' faz em JavaScript?",
    respostas: [
      'Itera sobre os elementos de um array e executa uma função para cada elemento.',
      'Remove o último elemento de um array.',
      'Adiciona um elemento ao final de um array.'
    ],
    correta: 0
  },
  {
    pergunta:
      'Qual é a forma correta de se referir a um elemento HTML usando JavaScript?',
    respostas: [
      "document.find('elementID');",
      "document.getElementById('elementID');",
      "get.element('elementID');"
    ],
    correta: 1
  },
  {
    pergunta: "O que a declaração 'use strict'; faz em JavaScript?",
    respostas: [
      'Ativa o modo de execução estrito, que torna erros mais visíveis.',
      'Desativa o modo de execução estrito, permitindo erros silenciosos.',
      "Define um novo objeto 'strict' para uso no escopo atual."
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'map()' faz em JavaScript?",
    respostas: [
      'Filtra os elementos de um array com base em uma condição específica.',
      'Modifica os elementos de um array com base em uma função dada.',
      'Cria um novo array com os resultados da chamada de uma função para cada elemento do array original.'
    ],
    correta: 2
  },
  {
    pergunta:
      'Qual é a forma correta de adicionar um evento de clique a um elemento HTML usando JavaScript?',
    respostas: [
      "element.addEventListener('click', minhaFuncao());",
      'element.onclick = minhaFuncao;',
      "element.onClick('minhaFuncao()');"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
    respostas: [
      'Retorna o valor inteiro de uma string.',
      'Converte um valor para string.',
      'Retorna o valor float de uma string.'
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      'AVerifica se dois valores são iguais em valor, mas não necessariamente do mesmo tipo.',
      'Verifica se dois valores são iguais em valor e tipo.',
      'Verifica se dois valores são diferentes em valor e tipo.'
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a finalidade do método 'push()' em JavaScript?",
    respostas: [
      'Remove o último elemento de um array.',
      'Adiciona um elemento ao início de um array.',
      'Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.'
    ],
    correta: 2
  }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  // Coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
