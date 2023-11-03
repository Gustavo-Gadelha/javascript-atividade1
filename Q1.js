let a = 5
let b = 6
let c = 7

let p = (a + b + c) / 2
let Area = Math.sqrt(p*(p-a)*(p-b)*(p-c))

console.log(`Lados do triângulo: ${a}, ${b} e ${c}`)
console.log(`Semi-perímetro do triângulo: ${p}`)
console.log(`Área do triângulo: ${Area}`)