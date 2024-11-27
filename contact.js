document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "welcome.html";
        });
    }

    const contactList = document.getElementById("contact-list");
    if (contactList) {
        contactList.innerHTML = "<li>John Doe: 123-456-7890</li>"; // Example contact
    }
});
