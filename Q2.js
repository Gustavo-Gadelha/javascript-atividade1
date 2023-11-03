file1 = 'documento.pdf'
file2 = 'arquivo.txt'
console.log(getFileExtension(file1))
console.log(getFileExtension(file2))


// divide a string com base no '.' e retorna o ultimo elemento do array
function getFileExtension(file) {
    return file.split('.').pop()
}