// davaleba 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterEven(numbers) {
    return numbers.filter(num => num % 2 === 0)
}

function filterOdd(numbers) {
    return numbers.filter(num => num % 2 !== 0)
}

const evenNumbers = filterEven(numbers)
const oddNumbers = filterOdd(numbers)

console.log("numbers", numbers)
console.log("even numbers", evenNumbers)
console.log("odd numbers", oddNumbers)



//davaleba 2
const names = ["Giorgi Bibilashvili", "gogs asatiani", "saba bokuchava", "andria gorgoshadze"]

function convertToInitials(names) {
    return names.map(name => {
        const [firstName, lastName] = name.split(' ')
        return `${firstName[0]}.${lastName[0]}`
    });
}

const initials = convertToInitials(names)

console.log("regular სახელები", names)
console.log("initials", initials)



//davaleba 3
const words = ["apple", "banana", "mango", "strawberry", "potato", "orange", "tomato"]

function Words(words) {
    return words.filter(word => word.length > 5)
}
const longWords = Words(words)

console.log("regular", words)
console.log("5 simboloze meti", longWords)
