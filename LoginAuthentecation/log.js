// // const loginText = document.querySelector(".title-text .login");
// // const loginForm = document.querySelector("form.login");
// // const loginBtn = document.querySelector("label.login");
// // const signupBtn = document.querySelector("label.signup");
// // const signupLink = document.querySelector("form .signup-link a");
// // signupBtn.onclick = () => {
// //   loginForm.style.marginLeft = "-50%";
// //   loginText.style.marginLeft = "-50%";
// // };
// // loginBtn.onclick = () => {
// //   loginForm.style.marginLeft = "0%";
// //   loginText.style.marginLeft = "0%";
// // };
// // signupLink.onclick = () => {
// //   signupBtn.click();
// //   return false;
// // };

const users = [];
let currentUser = null;

// Render function
function render(component) {
    document.getElementById('content').innerHTML = component;
}

// Registration function
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const user = {
        username,
        password
    };

    users.push(user);
    alert('Registration successful. Please log in.');
    render('<h2>Login</h2><br/><input type="text" id="login-username" placeholder="Username"/><br/><input type="password" id="login-password" placeholder="Password"/><br/><button onclick="login()">Login</button>');
}

// Login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    

    for (let user of users) {
        if (user.username === username && user.password === password) {
            currentUser = user;
            alert('Login successful.');
            render('<h2>Welcome, ' + currentUser.username + '!</h2><br/><button onclick="restrictedPage()">Access Secured Page</button>');
            return;
        }
    }

    alert('Invalid username or password.');
}

// Accessing a restricted page
function restrictedPage() {
    if (currentUser === null) {
        alert('Please log in to access the restricted page.');
    } else {
        render('<h2>Restricted Page</h2><br/><p>Welcome to the restricted page, ' + currentUser.username + '!</p>');
    }
}

// Initial rendering
render('<h2>Registration</h2><br/><input type="text" id="username" placeholder="Username"/><br/><input type="password" id="password" placeholder="Password"/><br/><input type="password" id="confirm-password" placeholder="Confirm Password"/><br/><button onclick="register()">Register</button>');


// let users = {}; // Object to store registered users

// function register() {
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     if (username && password) {
//         // Check if the user already exists
//         if (!users.hasOwnProperty(username)) {
//             // Store user securely (e.g., using bcrypt for hashing)
//             users[username] = password;
//             alert("Registration successful!");
//             // Hide registration form and show login form
//             document.getElementById("registrationForm").style.display = "none";
//             document.getElementById("loginForm").style.display = "block";
//         } else {
//             alert("User already exists. Please choose a different username.");
//         }
//     } else {
//         alert("Please enter both username and password.");
//     }
// }

// function login() {
//     let username = document.getElementById("loginUsername").value;
//     let password = document.getElementById("loginPassword").value;
//     if (users.hasOwnProperty(username)) {
//         // Verify password (e.g., using bcrypt for hashing)
//         if (users[username] === password) {
//             alert("Login successful!");
//             // Hide login form and show secured page
//             document.getElementById("loginForm").style.display = "none";
//             document.getElementById("securedPage").style.display = "block";
//         } else {
//             alert("Incorrect password. Please try again.");
//         }
//     } else {
//         alert("User not found. Please register first.");
//     }
// }

// function logout() {
//     // Clear user session and display login form
//     document.getElementById("securedPage").style.display = "none";
//     document.getElementById("loginForm").style.display = "block";
// }