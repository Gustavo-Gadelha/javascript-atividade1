function sum(x, y) {
    if (x == y) {
        return x * 3
    } else {
        return x + y
    }
}

console.log(`Resultado da soma de números iguais: ${sum(10, 10)}`)
console.log(`Resultado da soma de números diferentes: ${sum(10, 50)}`)
