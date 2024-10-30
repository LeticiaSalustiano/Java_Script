//MAP: 
//Dado um array de números, use a função map para criar um novo array com a raiz quadrada de cada número. 
const numeros = [1, 4, 9, 16, 25];
const raizQuadrada = numeros.map(num => Math.sqrt(num));
console.log(raizQuadrada); 


//Use a função map para criar um novo array contendo apenas os nomes dos produtos em letras maiúsculas. 
const produtos = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 49.99 },
    { nome: 'Tênis', preco: 89.99 }
  ];
  
  const nomesProdutos = produtos.map(produto => produto.nome.toUpperCase());
  console.log(nomesProdutos);   


//FILTER: 
//Dado um array de números, use a função filter para criar um novo array contendo apenas os números entre 10 e 50. 
const numeros2 = [5, 10, 15, 20, 50, 60];
const entreDezECinquenta = numeros.filter(num => num >= 10 && num <= 50);
console.log(entreDezECinquenta); 


//Use a função filter para criar um novo array contendo apenas as pessoas que têm mais de 18 e menores de 65 anos. 
const pessoas = [
    { nome: 'Ana', idade: 17 },
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 19 },
    { nome: 'Carlos', idade: 66 }
  ];
  
  const pessoasMaior18Menor65 = pessoas.filter(pessoa => pessoa.idade > 18 && pessoa.idade < 65);
  console.log(pessoasMaior18Menor65); 
   

//REDUCE: 
//Dado um array de números, use a função reduce para calcular a soma de todos os números. 
const numeros3 = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); 


//Dado um array de objetos representando transações, use a função reduce para calcular o saldo final. 
const transacoes = [
    { tipo: 'deposito', valor: 100 },
    { tipo: 'retirada', valor: 50 },
    { tipo: 'deposito', valor: 200 }
  ];
  
  const saldoFinal = transacoes.reduce((acc, transacao) => {
    return transacao.tipo === 'deposito' ? acc + transacao.valor : acc - transacao.valor;
  }, 0);
  
  console.log(saldoFinal); 
  

//EVERY: 
//Dado um array de números, use a função every para verificar se todos os números são positivos. 
const numeros4 = [1, 2, 3, 4, 5];
const todosPositivos = numeros.every(num => num > 0);
console.log(todosPositivos);

//Dado um array de objetos representando alunos, use a função every para verificar se todos os alunos passaram (nota maior ou igual a 6). 
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 8 }
  ];
  
  const todosAprovados = alunos.every(aluno => aluno.nota >= 6);
  console.log(todosAprovados);   


//SOME:  
// Dado um array de números, use a função some para verificar se há pelo menos um número negativo. 
const numero = [1, 2, -3, 4, 5];
const temNegativo = numeros.some(num => num < 0);
console.log(temNegativo); 

//Dado um array de objetos representando produtos, use a função some para verificar se há pelo menos um produto com preço acima de 100. 
const produtos2 = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 49.99 },
    { nome: 'Tênis', preco: 120.00 }
  ];
  
  const temPrecoAlto = produtos2.some(produto => produto.preco > 100);
  console.log(temPrecoAlto); 
  

//FIND:  
//Dado um array de números, use a função find para encontrar o primeiro número maior que 10. 
const num = [5, 10, 12, 3, 8];
const primeiroMaiorQueDez = numeros.find(num => num > 10);
console.log(primeiroMaiorQueDez); 

//Dado um array de objetos representando pessoas, use a função find para encontrar a primeira pessoa com idade maior que 18. 
const pessoas2 = [
    { nome: 'Ana', idade: 17 },
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 19 }
  ];
  
  const primeiraMaiorDezoito = pessoas2.find(pessoa => pessoa.idade > 18);
  console.log(primeiraMaiorDezoito); 
  

//INCLUDES: 
//Dado um array de números, use a função includes para verificar se o número x está presente no array. 
const nume = [1, 2, 3, 4, 5];
const x = 3;
const incluiX = numeros.includes(x);
console.log(incluiX); 

//Use a função includes para verificar se a fruta 'Maçã' está presente no array e qual seu preço. 
const frutas = ['Banana', 'Laranja', 'Maçã', 'Manga'];
const adicionar = frutas.includes('Maçã');
console.log(adicionar); 
