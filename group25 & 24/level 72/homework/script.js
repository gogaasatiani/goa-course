
function Number() {
    const number = parseInt(prompt("შეიყვანეთ რიცხვი:"));

    if (number % 2 === 0) {
        console.log(`${number} არის ლუწი.`);
    } else {
        console.log(`${number} არის კენტი.`);
    }
}




function temperature() {
    
    const Temperature = parseFloat(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:"));
    if (Temperature < 0) {
        console.log("ტემპერატურა არის ცივი.");
    } else if (Temperature >= 0 && Temperature <= 25) {
        console.log("ტემპერატურა არის ზომიერი.");
    } else {
        console.log("ტემპერატურა არის ცხელი.");
    }
}



if (score < 0 & score > 100) {
    console.log("შეიყვანეთ ვალიდური ქულა (0-100).");
} else {
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`თქვენი ქულა არის ${score}, შეფასება: ${grade}.`);
}