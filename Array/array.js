//Map

//Array com a raiz quadrada de cada número:
const numeros = [4, 9, 16, 25];
        const raizesQuadradas = numeros.map(num => Math.sqrt(num));

        document.getElementById('resultado-raizes').innerText = `Raízes Quadradas: ${raizesQuadradas.join(', ')}`;

//array contendo apenas os nomes dos produtos em letras maiúsculas:     
        const produtos = [
            { nome: 'Camiseta', preco: 29.99 },
            { nome: 'Calça', preco: 49.99 },
            { nome: 'Tênis', preco: 89.99 }
        ];
        const nomesMaiusculos = produtos.map(produto => produto.nome.toUpperCase());

        document.getElementById('resultado-nomes').innerText = `Nomes dos Produtos: ${nomesMaiusculos.join(', ')}`;


 //Filter
 
 //Array contendo apenas os números entre 10 e 50:
 const arrayNumber = [1, 5, 6 , 10, 25, 50, 100]

const filterArray = arrayNumber.filter(x => x >= 50 && x <= 100)
console.log(filterArray);

//Array contendo apenas as pessoas que têm mais de 18 e menores de 65 anos:
const pessoas = [ 
    { nome: 'Ana', idade: 17 }, 
    { nome: 'João', idade: 20 }, 
    { nome: 'Maria', idade: 19 } 
]; 

const idade = pessoas.filter(x => x.idade >= 18 && x.idade<= 65)
console.log(idade);


//REDUCE

//Use a função reduce para calcular a soma de todos os números:
const numeros2 = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const soma = numeros.reduce((prevVal, x) => prevVal + x, 0)
console.log(soma);

//Use a função reduce para calcular o saldo final:
const transacoes = [ 
    { tipo: 'deposito', valor: 100 }, 
    { tipo: 'retirada', valor: 50 }, 
    { tipo: 'deposito', valor: 200 } 
];

const saldoFinal = transacoes.reduce((saldo, transacao) => {
    if (transacao.tipo === 'deposito') {
        return saldo + transacao.valor;
    } else if (transacao.tipo === 'retirada') {
        return saldo - transacao.valor;
    }   
}, 0);

console.log(saldoFinal); 


//EVERY

//Use a função every para verificar se todos os números são positivos:
const arrayPos = [1, 2, 5, 3, 6]

console.log(arrayPos.every(x => x > 0));

//Use a função every para verificar se todos os alunos passaram (nota maior ou igual a 6):
const alunos = [ 
    { nome: 'Ana', nota: 7 }, 
    { nome: 'João', nota: 5 }, 
    { nome: 'Maria', nota: 8 } 
]; 

const nota = alunos.every(x => x.nota >= 6);
console.log(nota);


//SOME

//Use a função some para verificar se há pelo menos um número negativo:
const numero3 = [-1, 0, 1, 2, 3]

const verificador = numNeg.some(x => x < 0)

console.log(verificador);

//Use a função some para verificar se há pelo menos um produto com preço acima de 100:
const produtos2 = [ 
    { nome: 'Camiseta', preco: 29.99 }, 
    { nome: 'Calça', preco: 49.99 }, 
    { nome: 'Tênis', preco: 120.00 } 
]; 

const verificador2 = produtos.some(x => x.preco > 100)
console.log(verificador);


//FIND

//Use a função find para encontrar o primeiro número maior que 10:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const maior = number.find(x => x > 10)
console.log(maior);

//Use a função find para encontrar a primeira pessoa com idade maior que 18:
const pessoas2 = [ 
    { nome: 'Ana', idade: 17 }, 
    { nome: 'João', idade: 20 }, 
    { nome: 'Maria', idade: 19 } 
]; 

const idades = pessoas.find(x => x.idade > 18)
console.log(idades);


//INCLUDES

//Use a função includes para verificar se o número x está presente no array:
console.log([1,2,3].includes(3));

//Use a função includes para verificar se a fruta 'Maçã' está presente no array e qual seu preço:
const frutas = ['Banana', 'Laranja', 'Maçã', 'Manga'];

const horti = frutas.includes('Maçã')
console.log(horti);
