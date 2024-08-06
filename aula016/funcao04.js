// 5! = 5 x 4 x 3 x 2 x 1

function factorial(n) {
    let fact = 1
    for (let counter = n; counter > 1; counter--) {
        fact *= counter
    }
    return fact
}

res = factorial(5)
console.log(res)