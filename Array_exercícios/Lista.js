const pizzas = [
    'Mussarela',
    'Calabresa',
    'Peperonni',
    'Santista',
    'Marguerita'
];

//Insere o item:
pizzas.unshift('Portuguesa');
console.log(pizzas); 

//Altera o item:
pizzas.splice(2, 2, 'Moda', 'Doce'); 
console.log(pizzas);

//Exclui o item:
pizzas.splice(2, 1);