let stg = 'hi its me'

let result = stg.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1)
})

console.log(result.join(" "));