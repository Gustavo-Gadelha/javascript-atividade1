function media(x, y) {
    if (x < 0 || x > 10) {
        console.log("Número inválido: " + x)
    } else if (y < 0 || y > 10) {
        console.log("Número inválido: " + y)
    } else {
        console.log(`Média: ${(x + y) / 2}`)
    }
}

media(4, 6)
media(13, 1)
media(5, 19)