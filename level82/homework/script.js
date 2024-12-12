function chooseRandomName(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const chosenName = names[randomIndex];
    
    console.log(`${chosenName} უნდა გადაიხადოს ყველას საკვების გადასახადი.`);
}
const namesList = ["ნიკა", "გაგა", "გოგა", "ზიტა", "დათო"];
chooseRandomName(namesList);



function fizzBuzzFilter(numbers) {
    const result = [];

    for (let num of numbers) {
        if (num % 3 === 0 && num % 5 === 0) {
            result.push("FizzBuzz");
        } else if (num % 3 === 0) {
            result.push("Fizz");
        } else if (num % 5 === 0) {
            result.push("Buzz");
        }
    }

    return result;
}
const numbersList = [1, 2, 3, 4, 5, 15, 18, 20, 30, 33, 35, 40];
const fizzBuzzResult = fizzBuzz(numbersList);
console.log(fizzBuzzResult);

