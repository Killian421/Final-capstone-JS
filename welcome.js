document.addEventListener("DOMContentLoaded", function () {
    const musicListButton = document.getElementById("music-list-button");
    if (musicListButton) {
        musicListButton.addEventListener("click", function () {
            window.location.href = "shop.html";
        });
    }

    const contactsButton = document.getElementById("contacts");
    if (contactsButton) {
        contactsButton.addEventListener("click", () => {
            window.location.href = "contact.html"; // Navigate to contact.html
        });
    }

    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            const confirmation = confirm("Are you sure you want to logout?");
            if (confirmation) {
                window.location.href = "index.html";
            }
        });
    }

    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");

    if (menuIcon) {
        menuIcon.addEventListener("click", () => {
            sidebar.classList.toggle("open"); // Toggle sidebar visibility
        });
    }

    // Redirect to Add a Song page
    document.getElementById("add-song-button").addEventListener("click", () => {
        window.location.href = "shop.html";
    });

    // Redirect to Music List page
    document.getElementById("music-list-button").addEventListener("click", () => {
        window.location.href = "song.html";
    });

    // Redirect to Home
    document.getElementById("home").addEventListener("click", () => {
        alert("You are already on the Home page!");
    });

    // Redirect to Contacts
    document.getElementById("contacts").addEventListener("click", () => {
        window.location.href = "contact.html";
    });

    // About button functionality
    document.getElementById("about-button").addEventListener("click", () => {
        window.location.href = "about.html";
    });

    // Redirect to Profile
    document.getElementById("profile").addEventListener("click", () => {
        window.location.href = "profile.html";
    });

    // Load profile data from localStorage
    const profilePic = localStorage.getItem("profilePic");
    const fullName = localStorage.getItem("fullName");
    
    if (profilePic && fullName) {
        const profileImageElement = document.querySelector(".profile-pic");
        const fullNameElement = document.querySelector(".full-name");
    
        if (profileImageElement) profileImageElement.src = profilePic;
        if (fullNameElement) fullNameElement.textContent = fullName;
    }
    
});
