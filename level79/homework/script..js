function calculateBMI(weight, height) {
    const bmi = weight / (height * height); // BMI formula: weight (kg) / (height (m) * height (m))
    let message;
    if (bmi < 18.5) {
        message = `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
    } else {
        message = `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
    }

    return message;
}


