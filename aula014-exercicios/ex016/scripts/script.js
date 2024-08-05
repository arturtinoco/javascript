function count() {
    let formInicio = document.getElementById('iinicio')
    let formFim = document.getElementById('ifim')
    let formPasso = document.getElementById('ipasso')
    let res = document.getElementById('resultado')

    if (formInicio.value.length == 0 || formFim.value.length == 0 || formPasso.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        alert('[ERRO] Preencha todos os campos.')
    } else {
        res.innerHTML = ('<p>Contando:</p>')
        let ini = Number(formInicio.value)
        let fim = Number(formFim.value)
        let passo = Number(formPasso.value)

        if (ini == fim) {
            alert('[ERRO] Verifique seus dados.')
            res.innerHTML = 'Início e Fim iguais: nenhum passo pode ser dado!'
        } else if (passo <= 0) {
            alert('[ERRO] Verifique seus dados.')
            res.innerHTML = 'Dê ao menos um passo, humano! Este pode ser um grande passo para a humanidade.<br><br>Busque conhecimento.'
        } else {
            if (ini < fim) {
                // Contagem crescente
                for (let counter = ini; counter <= fim; counter += passo) {
                    res.innerHTML += (`${counter} \u{1F449} `)
                }
                res.innerHTML += `\u{1F3C1}`
            } else {
                // Contagem decrescente
                for (let counter = ini; counter >= fim; counter -= passo) {
                    res.innerHTML += (`${counter} \u{1F449} `)
                }
                res.innerHTML += `\u{1F3C1}`
            }
        }
    }
}

/*

*/

