function tabuada() {
    let inumero = document.getElementById('inumero')
    let res = document.querySelector('select#resultado')
    
    if (inumero.value.length == 0) {
        alert('Digite um Número.')
    } else {
        let numero = Number(inumero.value)
        res.innerHTML = ''
        for (let counter = 1; counter <= 10; counter++) {
             let item = document.createElement('option')
             item.text = `${numero} x ${counter} = ${numero*counter}`
             item.value = `tab${counter}`
             res.appendChild(item)
        }
    }
}
