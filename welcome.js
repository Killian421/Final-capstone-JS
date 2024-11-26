document.addEventListener("DOMContentLoaded", function() {
    const musicListButton = document.getElementById("music-list-button");
    if (musicListButton) {
        musicListButton.addEventListener("click", function() {
            window.location.href = "shop.html";
        });
    }

    document.getElementById('atm').addEventListener('click', () => {    
        window.location.href = 'atm.html';
    });
    
    document.getElementById('contacts').addEventListener('click', () => {
        window.location.href = 'contact.html';
    });

    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            const confirmation = confirm("Are you sure you want to logout?");
            if (confirmation) {
                window.location.href = 'index.html';
            } else {
                window.location.href = 'welcome.html';
            }
        });
    }

    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");

    menuIcon.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
});
