function areaTriangulo(a, b, c) {
    var sp = (a + b + c) / 2
    var area = Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c))

    console.log(`Lados do triângulo: ${a}, ${b} e ${c}`)
    console.log(`Semi-perímetro do triângulo: ${sp}`)
    console.log(`Área do triângulo: ${area}\n`)
}

areaTriangulo(5, 6, 7)