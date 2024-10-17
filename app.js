const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('errorMessage');

// Check if the user exists in local storage
const getUser = () => JSON.parse(localStorage.getItem('user')) || {};

// Login functionality
loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const storedUser = getUser();

    try {
        if (username === '' || password === '') {
            throw new Error('Both fields are required');
        }

        if (username !== storedUser.username || password !== storedUser.password) {
            throw new Error('Invalid username or password');
        }

        errorMessage.textContent = '';
        alert('Login successful!');

        window.location.href = 'shop.html'; // Redirect after login
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

// Register functionality
registerForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();

    try {
        if (newUsername === '' || newPassword === '') {
            throw new Error('Both fields are required');
        }

        // Store the new user details in local storage
        localStorage.setItem('user', JSON.stringify({ username: newUsername, password: newPassword }));

        alert('Registration successful! You can now log in.');
        window.location.href = 'index.html'; // Redirect to login page
    } catch (error) {
        errorMessage.textContent = error.message;
    }

});

document.getElementById('go-back').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('go-back').addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to go back?");
    
    if (confirmation) {
        window.location.href = 'index.html';
    }else{
        window.location.href = 'register.html';
    }
});