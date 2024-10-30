//Criar uma lista de tarefas onde você pode adicionar, remover e substituir itens. Usando o appendChild, replacedChild e removeChild; 
const taskList = document.getElementById('taskList');

  function addTask() {
    const input = document.getElementById('taskInput');
    const li = document.createElement('li');
    li.textContent = input.value;
    
    li.onclick = () => {
      taskList.removeChild(li);
    };

    taskList.appendChild(li);
    input.value = '';
  }

  function replaceTask(oldTask, newTask) {
    const items = taskList.getElementsByTagName('li');
    for (let item of items) {
      if (item.textContent === oldTask) {
        const newLi = document.createElement('li');
        newLi.textContent = newTask;
        newLi.onclick = () => {
          taskList.removeChild(newLi);
        };
        taskList.replaceChild(newLi, item);
        break;
      }
    }
  }

//Crie um array de frutas. Remova duas frutas a partir do segundo índice e adicione duas novas frutas no lugar. 
let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
frutas.splice(2, 2, 'kiwi', 'abacaxi'); 
console.log(frutas); 

//Crie um Array e aplique a função Reverse ;
let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); 

//Crie um Array String com uma frase separada e utilize a função Join para unificar em uma string; 
let frase = ['Olá', 'Como', 'você', 'está?'];
let stringFrase = frase.join(' ');
console.log(stringFrase);

//Exclua o último item de um array; 
let numeros = [1, 2, 3, 4, 5];
numeros.pop();
console.log(numeros);

//Adicione um item no início de um array; 
let letras = ['b', 'c', 'd'];
letras.unshift('a');
console.log(letras); 

//Exclua o primeiro item de um array; 
let cores = ['vermelho', 'verde', 'azul'];
cores.shift();
console.log(cores);

//Crie um objeto que contenha propriedades numéricas, textos e métodos; 
let pessoa = {
    nome: 'João',
    idade: 30,
    falar: function() {
      return `Olá, meu nome é ${this.nome}.`;
    }
  };
  console.log(pessoa.falar()); 

//Utilize o This para ver variáveis e arrays que você criou pelo Documment; 
let carro = {
    marca: 'Fusca',
    ano: 1969,
    detalhes: function() {
      console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
    }
  };
  carro.detalhes();

//Utilize o This dentro de um método para chamar alguma propriedade; 
let contador = {
    valor: 0,
    incrementar: function() {
      this.valor++;
      console.log(this.valor);
    }
  };
  contador.incrementar(); 
  contador.incrementar(); 

//Crie uma função Callback para otimizar seu código; 
function processarDados(dados, callback) {
    let resultado = dados.map(item => item * 2);
    callback(resultado);
  }
  
  processarDados([1, 2, 3], function(resultado) {
    console.log(resultado); 
  });
 