function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('iano')
    var res = document.querySelector('div#resultado')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
        var formSexo = document.querySelectorAll('input.sexo')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Bebê
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (formSexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Bebê
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}