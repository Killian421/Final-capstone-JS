document.addEventListener("DOMContentLoaded", () => {
    const profilePicInput = document.getElementById("profile-pic");
    const profilePicPreview = document.getElementById("profile-pic-preview");
    const fullNameInput = document.getElementById("full-name");
    const saveButton = document.getElementById("save-button");
    const backButton = document.getElementById("back-button");

    // Load current profile data
    const storedProfilePic = localStorage.getItem("profilePic");
    const storedFullName = localStorage.getItem("fullName");

    if (storedProfilePic) profilePicPreview.src = storedProfilePic;
    if (storedFullName) fullNameInput.value = storedFullName;

    // Update profile picture preview on file change
    profilePicInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Save updated profile data
    saveButton.addEventListener("click", () => {
        const newProfilePic = profilePicPreview.src;
        const newFullName = fullNameInput.value.trim();

        if (newFullName === "") {
            alert("Full name cannot be empty.");
            return;
        }

        localStorage.setItem("profilePic", newProfilePic);
        localStorage.setItem("fullName", newFullName);

        alert("Profile updated successfully!");
    });

    // Back button functionality
    backButton.addEventListener("click", () => {
        window.location.href = "welcome.html";
    });
});
