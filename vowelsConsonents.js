function isVowel(char) {
    char = char.toLowerCase()
    return ['a', 'e', 'i', 'o', 'u'].includes(char)
}

const character = 'A'

if (isVowel(character)) {
    console.log(character + " is a Vowel");
} else {
    console.log(character + " is not a Vowel");
}
