// ESTRUTURAS DE REPETIÇÃO 
/*
var counter = 1

do {
    console.log(`Passo ${counter}`)
    counter++
} while (counter <= 6)
*/


var counter = 1

while (true) {
    console.log(`Passo ${counter}`)
    counter++
    if (counter > 6) {
        break
    }
}