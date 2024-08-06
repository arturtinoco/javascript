let inum = document.getElementById('inum')
let list = document.querySelector('select#result')
let res = document.querySelector('div#analysis')
let numList = []

function addNumber(){
    res.innerHTML = ''
    let num = Number(inum.value)

    if (num.length == 0 || num <= 0 || num > 100 || numList.includes(num)) {
        alert('[ERRO] Valor inválido ou já está na lista!')
        inum.value = ''
    } else {
        numList.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        //item.value = num
        list.appendChild(item)
        inum.value = ''
        inum.focus()
    }
    
}

function analyse() {
    if (numList.length == 0) {
        alert('[ERRO] Adicione valores antes de finalizar!')
    } else {
        inum.value = ''
        numList.sort(function(a, b){return a - b})

        let amountInside = numList.length
        let highestNum = numList[amountInside - 1]
        let lowestNum = numList[0]
        let total = 0

        for (let i = 0; i < amountInside; i++) {
            total += numList[i]
        }

        let median = total / amountInside

        res.innerHTML = `
                        <p>Ao todo, temos ${amountInside} números cadastrados.</p>
                        <p>O maior valor informado foi ${highestNum}.</p>
                        <p>O menor valor informado foi ${lowestNum}.</p>
                        <p>Somando todos os valores, temos ${total}</p>
                        <p>A média dos valores digitados é ${+parseFloat((median).toFixed(2))}</p>
                        `
    }
}


