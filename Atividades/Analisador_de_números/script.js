let btn = document.getElementById('btn')
let numeroInput = document.getElementById('numero')
let resultadoTextarea = document.getElementById('resultado')
let finalizarBtn = document.getElementById('finalizar')
let detalhesDiv = document.getElementById('detalhes')
let numeros = []


btn.addEventListener('click', () => {
    let numero = parseInt(numeroInput.value)
    
    if (numero >= 1 && numero <= 100) {
        if (!numeros.includes(numero)) {
            numeros.push(numero)
            resultadoTextarea.value += `Vetor adicionado: ${numero}\n`
        } else {
            alert('Número já adicionado!')
        }
    } else {
        alert('Por favor, insira um número entre 1 e 100.')
    }
    
    numeroInput.value = '' // Limpa o campo após adicionar
    numeroInput.focus()
})

//para clicar com o enter
numeroInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btn.click(); // Simula um clique no botão
    }
});


finalizarBtn.addEventListener('click', () => {
    if (numeros.length > 0) {
        let soma = numeros.reduce((a, b) => a + b)
        let maior = Math.max(...numeros)
        let menor = Math.min(...numeros)
        let media = soma / numeros.length

        //exibir resultados na div Detalhes
        detalhesDiv.innerHTML = `
            
            <p>Total de Números: ${numeros.length}</p>
            <p>Maior Número: ${maior}</p>
            <p>Menor Número: ${menor}</p>
            <p>Soma: ${soma}</p>
            <p>Média: ${media.toFixed(2)}</p>
        `
    } else {
        alert('Nenhum número foi adicionado!')
    }
})