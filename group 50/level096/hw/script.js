class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }
}

const users = [];

function register() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // შემოწმება, რომ ემაილი უკვე დაკავებულია
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('ეს ემაილი უკვე დაკავებულია!');
        return;
    }

    const newUser = new User(fullname, email, password);
    users.push(newUser);

    document.getElementById('message').innerText = 'რეგისტრაცია წარმატებით დასრულდა!';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        document.getElementById('display-fullname').innerText = `სრული სახელი: ${user.fullname}`;
        document.getElementById('display-email').innerText = `ემაილი: ${user.email}`;
        document.getElementById('user-data').style.display = 'block';
        alert('თქვენ წარმატებით შეხვდით!');
    } else {
        alert('არასწორი ემაილი ან პაროლი.');
    }
}
