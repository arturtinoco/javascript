function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagens/manha-250.png'
        document.body.style.background = '#e9c06b'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'imagens/tarde-250.png'
        document.body.style.background = '#925b60'
    } else {
        // Boa noite
        img.src = 'imagens/noite-250.png'
        document.body.style.background = '#323e41'
    }
}
