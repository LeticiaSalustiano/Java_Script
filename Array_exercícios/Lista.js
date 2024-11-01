const pizzas = [
    'Mussarela',
    'Calabresa',
    'Peperonni',
    'Santista',
    'Marguerita'
];

// Função para inserir um item
function inserePizza(item, posicao) {
    if (posicao === 'inicio') {
        pizzas.unshift(item); // Adiciona no início
    } else if (posicao === 'fim') {
        pizzas.push(item); // Adiciona no final
    } else if (typeof posicao === 'number' && posicao >= 0 && posicao <= pizzas.length) {
        pizzas.splice(posicao, 0, item); // Adiciona em uma posição específica
    } else {
        console.log('Posição inválida');
    }
}

// Função para alterar um item
function alteraPizza(posicao, novoItem) {
    if (posicao >= 0 && posicao < pizzas.length) {
        pizzas[posicao] = novoItem;
    } else {
        console.log('Posição inválida');
    }
}

// Função para excluir um item
function excluiPizza(posicao) {
    if (posicao >= 0 && posicao < pizzas.length) {
        pizzas.splice(posicao, 1);
    } else {
        console.log('Posição inválida');
    }
}

// Função para exibir as pizzas como um parágrafo
function exibePizzas() {
    const paragrafo = document.createElement('p');
    paragrafo.textContent = pizzas.join(', ');
    document.body.appendChild(paragrafo);
}

// Exemplo de uso
inserePizza('Hawaiana', 'fim'); // Adiciona Hawaiana no final
alteraPizza(1, 'Frango com Catupiry'); // Altera Calabresa para Frango com Catupiry
excluiPizza(2); // Remove Peperonni
exibePizzas(); // Exibe todas as pizzas
