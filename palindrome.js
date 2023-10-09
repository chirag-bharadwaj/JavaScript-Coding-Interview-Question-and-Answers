let str = 'level'

let result = str.toLowerCase().split('').reverse().join('')

if (str == result) {
    console.log("Palindrome");
} else {
    console.log("not");
}
