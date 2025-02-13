var a = 5;
var b = 5;

if (a === b) {
    console.log("ცვლადები ტოლია");
} else {
    console.log("ცვლადები არ არის ტოლი");
}




var userNumber = prompt("შეიყვანეთ რიცხვი:");
userNumber = parseFloat(userNumber);

if (userNumber < 50) {
    console.log("რიცხვი 50-ზე ნაკლებია");
} else {
    console.log("რიცხვი 50-ზე მეტია ან ტოლი");
}

var firstNum = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
var secondNum = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));
var sum = firstNum + secondNum;

if (sum > 100) {
    console.log("ჯამი 100-ზე მეტია");
} else {
    console.log("ჯამი 100-ზე ნაკლებია ან ტოლი");
}

var chekNumber = parseFloat(prompt("შეიყვანეთ რიცხვი:"));

if (chekNumber >= 10) {
    console.log("რიცხვი 10-ზე მეტია ან ტოლი");
} else {
    console.log("რიცხვი 10-ზე ნაკლებია");
}


var inputNumber = parseFloat(prompt("შეიყვანეთ რიცხვი:"));
var variable = 15;

if (inputNumber <= variable) {
    console.log("რიცხვი ცვლადზე ნაკლებია ან ტოლი");
} else {
    console.log("რიცხვი ცვლადზე მეტია");
}