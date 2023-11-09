// divide a string em um array com base no '.' e retorna o ultimo elemento do array
function getFileExtension(file) {
    return file.split('.').pop()
}

console.log(getFileExtension('documento.pdf'))
console.log(getFileExtension('arquivo.txt'))