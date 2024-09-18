function carregar(){
    
   let agora = new Date()
   let hora = agora.getHours()
   let minuto = agora.getMinutes()
   let horas = window.document.getElementById('horas')
   let img = window.document.getElementById('imagem')
   let corpo = window.document.getElementById('corpo')

    if (hora >= 0 && hora <= 5) {
        horas.innerText = `Boa madrugada, agora são ${hora} hora ${minuto} min`
        img.src = 'imagens/madrugada.jpg'
        corpo.style.backgroundColor = '#20100D'
    } else if (hora < 12) {
        horas.innerText = `Bom dia, agora são ${hora} hora ${minuto} min`
        img.src = 'imagens/manha.jpg'
        corpo.style.backgroundColor = '#33949B'
    } else if (hora < 18) {
        horas.innerText = `Boa tarde, agora são ${hora} hora ${minuto} min`
        img.src = 'imagens/tarde.jpg'
        corpo.style.backgroundColor = '#C95E00'
    } else {
        horas.innerText = `Boa noite, agora são ${hora} hora ${minuto} min`
        img.src = 'imagens/noite.jpg'
        corpo.style.backgroundColor = '#19375D'
    }
}