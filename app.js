const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('errorMessage');

const getUser = () => JSON.parse(localStorage.getItem('user')) || {};

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

        window.location.href = 'welcome.html'; 
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

registerForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    try {
        if (newUsername === '' || newPassword === '' || confirmPassword === '') {
            throw new Error('All fields are required');
        }

        if (newPassword !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        localStorage.setItem('user', JSON.stringify({ username: newUsername, password: newPassword }));

        alert('Registration successful! You can now log in.');
        window.location.href = 'index.html';
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

document.getElementById('go-back').addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to go back?");
    
    if (confirmation) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'register.html';
    }
});
