function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // Check if the year is divisible by 400
            if (year % 400 === 0) {
                return true;  // Leap year
            } else {
                return false; // Not a leap year
            }
        } else {
            return true;  // Leap year
        }
    } else {
        return false; // Not a leap year
    }
}

// Example usage
const year = parseInt(prompt("Enter a year:"), 10);
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
