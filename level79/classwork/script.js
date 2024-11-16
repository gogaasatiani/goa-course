const username = prompt("შეიტანეთ თქვენი სახელი:");
const greeting = `Hello, ${username.charAt(2).toUpperCase() + username.slice(1).toLowerCase()}`;
alert(greeting);
