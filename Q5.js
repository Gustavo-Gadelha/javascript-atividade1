function removeFromStringAt(str, ind) {
    if (ind >= str.length) {
        return "Index out of bounds"
    }

    return [str.charAt(ind), str.slice(0, ind) + str.slice(ind+1)]
}

console.log(removeFromStringAt("hello world", 6))
console.log(removeFromStringAt("hello world", 50))