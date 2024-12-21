// function greetUser() {
//     const name = prompt("შეიყვანეთ თქვენი სახელი:"); 
//     const firstLetter = name[0].toUpperCase();
//     const restOfName = name.slice(1);
//     let greeting = "Hello, ";
//     greeting += firstLetter; 
//     greeting += restOfName; 
//     alert(greeting);
//   }
  
//   greetUser();
  
  
  


function postText() {
    const userInput = prompt("შეიყვანეთ თქვენი ტექსტი აქ ყველაზე მეტი 140 ასო შეიგიძლიათ დაწეროთ:");
  
    const maxLength = 140;
    let output;
    if (userInput.length > maxLength) {
      output = userInput.slice(0, maxLength);
    } else {
      output = userInput; 
    }

    alert(output);
  }
  
  postText();
  