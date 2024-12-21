let results = [];
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % 3 === 0 && num % 5 === 0) {
        results.push("FizzBuzz");
    } else if (num % 3 === 0) {
        results.push("Fizz");
    } else if (num % 5 === 0) {
        results.push("Buzz");
    }
}
alert(results.join(", "));