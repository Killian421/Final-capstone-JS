let balance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;

function updateBalanceDisplay() {
    document.getElementById('balance').value = balance;
}

function checkBalance() {
    document.getElementById('message').innerText = `Your balance is $${balance}`;
}

function deposit() {
    const depositAmount = prompt("Enter deposit amount");
    if (depositAmount && !isNaN(depositAmount)) {
        balance += parseFloat(depositAmount);
        localStorage.setItem('balance', balance);
        updateBalanceDisplay();
        document.getElementById('message').innerText = "Deposit successful.";
    } else {
        document.getElementById('message').innerText = "Invalid deposit amount.";
    }
}

function withdraw() {
    const withdrawAmount = prompt('Enter withdrawal amount');
    if (withdrawAmount && !isNaN(withdrawAmount)) {
        if (parseFloat(withdrawAmount) <= balance) {
            balance -= parseFloat(withdrawAmount);
            localStorage.setItem('balance', balance); 
            updateBalanceDisplay();
            document.getElementById('message').innerText = 'Withdrawal successful.';
        } else {
            document.getElementById('message').innerText = 'Insufficient funds.';
        }
    } else {
        document.getElementById('message').innerText = 'Invalid withdrawal amount.';
    }
}

function exitATM() {
    balance = 0; 
    localStorage.removeItem('balance'); 
    updateBalanceDisplay(); 
    document.getElementById('message').innerText = "Thank you for using the ATM.";
}

updateBalanceDisplay();

document.getElementById('back-button').addEventListener('click', () => {    
    window.location.href = 'welcome.html';

});
