// Most asked JavaScript Interview question
// Get the object by its: name or id

let arr = [
    { user: "Ayushi", address: "BLR", count: 10 },
    { user: "Raghav", address: "HSR", count: 120 },
    { user: "Havish", address: "CKM", count: 30 },
]

let result = arr.filter((each) => {
    return each.user === 'Ayushi'
})

console.log(result);