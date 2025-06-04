const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

function findUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

function isAdmin(user) {
    return user && user.role === 'admin';
}

function login(username, password) {
    const user = findUser(username, password);
    if (user) {
        return {
            success: true,
            isAdmin: isAdmin(user)
        };
    }
    return {
        success: false,
        message: 'Invalid username or password'
    };
}

// Exporting the login function for use in other modules
module.exports = {
    login
};