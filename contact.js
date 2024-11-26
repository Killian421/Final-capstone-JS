document.addEventListener("DOMContentLoaded", function() {
    const addContactButton = document.getElementById("add-contact");
    const contactList = document.getElementById("contact-list");

    document.getElementById('back-button').addEventListener('click', () => {    
        window.location.href = 'welcome.html';
    
    });

    addContactButton.addEventListener("click", function() {
        const nameInput = document.getElementById("contact-name");
        const numberInput = document.getElementById("contact-number");

        const name = nameInput.value.trim();
        const number = numberInput.value.trim();

        if (name === "" || number === "") {
            alert("Please enter both name and phone number.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = `${name}: ${number}`;
        contactList.appendChild(listItem);

        nameInput.value = "";
        numberInput.value = "";
    });
});
