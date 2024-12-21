// Predefined credentials
const predefinedUsername = "user123";
const predefinedPassword = "pass123";

// Prompt for username and password
const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

// Check credentials
if (username === predefinedUsername && password === predefinedPassword) {
    console.log("Login successful!");
} else {
    console.log("Login failed. Please try again.");
}
