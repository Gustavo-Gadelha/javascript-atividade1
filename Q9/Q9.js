function script() {
    let nome = prompt("Digite o seu nome: ")
    document.getElementById("conteudo").innerHTML = `<p>Olá ${nome}</p>`
}