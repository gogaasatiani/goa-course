
let number = parseInt(prompt("შეიტანეთ რიცხვი: "));
let evenSum = 0;
for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) { 
        evenSum += i; 
    }
}
console.log("ლუწი რიცხვების ჯამი:", evenSum);