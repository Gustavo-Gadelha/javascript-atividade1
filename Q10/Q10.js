function script() {
    let x = Number(prompt("Digite um número: "))
    let y = Number(prompt("Digite outro número: "))
    document.getElementById("conteudo").innerHTML = `<p>A soma de ${x} + ${y} = ${x + y}</p>`
}