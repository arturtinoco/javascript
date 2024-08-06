let values = [8, 1, 7, 4, 2, 9]
values.sort()
/*
for (let position = 0; position < values.length; position++) {
    console.log(`A posição ${position} tem o valor ${values[position]}`)
}
*/

for (let position in values) {
    console.log(`A positção ${position} tem o valor ${values[position]}`)
}