function media(x, y) {
    if (x < 0 || x > 10) {
        console.log("Número inválido: " + x)
    } else if (y < 0 || y > 10) {
        console.log("Número inválido: " + y)
    } else {
        console.log((x + y) / 2)
    }
}

media(4, 5)
media(11, 1)
media(1, 11)