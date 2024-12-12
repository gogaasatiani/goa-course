function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
let num = 29;
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}


function findDivisors(num) {
    console.log(`Divisors of ${num}:`);
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

findDivisors(36);


function sumOddNumbers() {
    let sum = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) { 
            sum += i;
        }
    }

    console.log(`The sum of all odd numbers between 1 and 50 is: ${sum}`);
}
sumOddNumbers();
