// true case: cat = tca, abc = cba, little = ttiell
// false case: cat = tba, abc = cbb, little = ttllii


var firstWord = 'Chirag'
var secWord = 'Ragchi'

function isAnagram(first, second) {
    var a = firstWord.toLowerCase()
    var b = secWord.toLowerCase()

    a = a.split("").sort().join("")
    b = b.split("").sort().join("")

    return a === b
}

console.log(isAnagram(firstWord, secWord));