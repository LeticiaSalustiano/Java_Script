const produtos = [ 
    { nome: 'Camiseta', preco: 29.99 }, 
    { nome: 'Calça', preco: 49.99 }, 
    { nome: 'Tênis', preco: 89.99 } 
  ];
  
  const nomesMaiusculos = produtos.map(produto => produto.nome.toUpperCase());
  
  console.log(nomesMaiusculos); // ['CAMISETA', 'CALÇA', 'TENIS']
  