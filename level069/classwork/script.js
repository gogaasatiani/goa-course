let userInput = prompt("შეიყვანეთ რიცხვი:");
let number = parseInt(userInput);
let i = 1;

while (i <= number) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    i++;
}





let userNumber = parseInt(prompt("შეიყვანეთ რიცხვი:"));
let choice = prompt("შეიყვანეთ არჩევანი: 'even', 'odd', 'square', 'multiple of 3'");

if (choice === 'even') {
    let i = 2;
    while (i <= userNumber) {
        console.log(i);
        i += 2;
    }
} else if (choice === 'odd') {
    let i = 1;
    while (i <= userNumber) {
        console.log(i);
        i += 2;
    }
} else if (choice === 'square') {
    let i = 1;
    while (i * i <= userNumber) {
        console.log(i * i);
        i++;
    }
} else if (choice === 'multiple of 3') {
    let i = 3;
    while (i <= userNumber) {
        console.log(i);
        i += 3;
    }
} else {
    console.log("არასწორი არჩევანი");
}
