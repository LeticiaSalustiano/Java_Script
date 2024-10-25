document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coletar os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;
        let anos = window.document.getElementById('ano');
        let ano = Number(anos.value);
        let idade = 2006 - ano;

        // Exibir mensagem de sucesso (ou faça o que desejar com os dados)
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        // Opcional: Limpar o formulário após o envio
        form.reset();
    });
});
let indice = 0;

const imagens = document.querySelector('.imagens');
const totalImagens = document.querySelectorAll('.imagem').length;

document.getElementById('btn-direita').addEventListener('click', function() {
    indice = (indice + 1) % totalImagens;
    atualizarCarrossel();
});

document.getElementById('btn-esquerda').addEventListener('click', function() {
    indice = (indice - 1 + totalImagens) % totalImagens;
    atualizarCarrossel();
});

function atualizarCarrossel() {
    const deslocamento = -indice * 100; // -100% para mover uma imagem
    imagens.style.transform = `translateX(${deslocamento}%)`;
}

    if(idade > 124 || idade < 18){
        texto.innerText = 'ERRO - Digite uma data válida (De 1900 à 2006)'
        window.alert('[ERRO] - Digite uma data válida (De 1900 à 2006)')

} else {
    texto.innerText = `Idade Válida!`
    
}


