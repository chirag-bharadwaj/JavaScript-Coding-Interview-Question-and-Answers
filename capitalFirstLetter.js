function capitalize(str) {
    var x = str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    })
    return x.join(" ")
}
console.log(capitalize("brinda Is my friend"));