function contar() {
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let resultado = window.document.getElementById('resultado');

    let i = parseInt(inicio.value);
    let f = parseInt(fim.value);
    let p = parseInt(passo.value);   

    if ( i < f){
        for(i; i <= f; i += p) {
            resultado.innerHTML += `${i} \u{27A1}`;
        }
    } else {
        for(i; i <= f; i -= p) {
            resultado.innerHTML += `${i} \u{27A1}`;
        }
    }
    
    resultado.innerHTML += `\u{1F3C1}`
   
}