// Get the song list element
const songListElement = document.getElementById('song-list');

// Retrieve the list of songs from localStorage
const songList = JSON.parse(localStorage.getItem('songs')) || [];

// Function to update the song list on the page
function updateSongList() {
    songListElement.innerHTML = ''; // Clear current list

    songList.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${song.name}, by: ${song.singer} 
            <a href="${song.link}" target="_blank">(Click here to Play)</a>
            <button class="remove-button" data-index="${index}">Remove</button>
        `;
        songListElement.appendChild(listItem);
    });

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            confirmRemoveSong(index);
        });
    });
}

// Function to confirm and remove a song
function confirmRemoveSong(index) {
    const confirmRemoval = confirm("Are you sure you want to remove this music?");
    if (confirmRemoval) {
        removeSong(index);
    }
}

// Function to remove a song from the list
function removeSong(index) {
    songList.splice(index, 1); // Remove the song at the specified index
    localStorage.setItem('songs', JSON.stringify(songList)); // Update localStorage
    updateSongList(); // Refresh the displayed song list
}

// Call the function to update the song list on page load
updateSongList();

// Back button functionality
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'welcome.html';
});
