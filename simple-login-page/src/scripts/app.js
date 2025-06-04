// This file contains the JavaScript code for handling the login functionality.

const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

function validateInput(username, password) {
    if (!username || !password) {
        alert('Please enter both username and password.');
        return false;
    }
    return true;
}

function login(username, password) {
    if (!validateInput(username, password)) {
        return;
    }

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        if (user.role === 'admin') {
            alert('Welcome Admin!');
            // Redirect to admin dashboard or perform admin-specific actions
        } else {
            alert('Welcome User!');
            // Redirect to user dashboard or perform user-specific actions
        }
    } else {
        alert('Invalid username or password.');
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Ensure username ends with @gmail.com
    if (!username.endsWith('@gmail.com')) {
        username += '@gmail.com';
    }

    // Simple validation (replace with your own logic)
    if (username === 'admin@gmail.com' && password === 'password123') {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password';
    }

});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Ensure username ends with @gmail.com
    if (!username.endsWith('@gmail.com')) {
        username += '@gmail.com';
    }

    // Simple validation (replace with your own logic)
    if (username === 'admin@gmail.com' && password === 'password123') {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
        setTimeout(function() {
            window.location.href = 'http://127.0.0.1:5000';
        }, 1000); // Redirect after 1 second
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password';
    }
});