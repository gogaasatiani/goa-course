let word = "გამარჯობა";
let language = prompt("შეიყვანეთ სასურველი ენა ქართული, ინგლისური, ფრანგული:")

switch (language) {
    case "ქართული":
        console.log(word);
        break;
    case "ინგლისური":
        console.log("Hello");
        break;
    case "ფრანგული":
        console.log("Bonjour")
        break;
    default:
        console.log("ასეთი ენა არ არსებობს ძამია სცადეთ ისევ")
        
}






// davaleba ori

let hour = parseInt(prompt("შეიყვანეთ საათი (0-23):"))

if (hour >= 0 && hour < 6) {
    console.log("ღამე")
} else if (hour >= 6 && hour < 12) {
    console.log("დილა")
} else if (hour >= 12 && hour < 18) {
    console.log("შუადღე")
} else if (hour >= 18 && hour < 24) {
    console.log("საღამო")
} else {
    console.log("არასწორია საათი უნდა იყოს 0-23 შორის")
}