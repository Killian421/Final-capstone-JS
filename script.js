let songList = [];
const songListElement = document.getElementById('song-list');

document.getElementById('add-song').addEventListener('click', () => {
    const songName = document.getElementById('song-name').value.trim();
    const singerName = document.getElementById('singer-name').value.trim();
    const songLink = document.getElementById('song-link').value.trim();

    if (songName && singerName && songLink) {
        addSongToList(songName, singerName, songLink);
        updateSongList();
        clearFormFields();
    } else {
        alert('Please enter valid song details');
    }
});

function addSongToList(name, singer, link) {
    const existingSongIndex = songList.findIndex(song => song.name === name && song.singer === singer && song.link === link);
    if (existingSongIndex >= 0) {
        alert('Song already exists in the list!');
    } else {
        songList.push({ name, singer, link, checked: false });
    }
}

function updateSongList() {
    songListElement.innerHTML = ''; // Clear the list

    songList.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <input type="checkbox" class="song-item-checkbox" ${song.checked ? 'checked' : ''} onchange="toggleSongCheck(${index})">
         ${song.name} , by: ${song.singer} 
            <a href="${song.link}" target="_blank">(Click here to Listen)</a>
            <div class="song-item-buttons">
                <button onclick="editSong(${index})">Edit</button>
                <button onclick="deleteSong(${index})">Delete</button>
            </div>
        `;
        songListElement.appendChild(listItem);
    });
}

function clearFormFields() {
    document.getElementById('song-name').value = '';
    document.getElementById('singer-name').value = '';
    document.getElementById('song-link').value = '';
}

function deleteSong(index) {
    songList.splice(index, 1);
    updateSongList();
}

function editSong(index) {
    const song = songList[index];
    const newName = prompt("Enter new song name:", song.name);
    const newSinger = prompt("Enter new singer name:", song.singer);
    const newLink = prompt("Enter new song link:", song.link);

    if (newName && newSinger && newLink) {
        song.name = newName;
        song.singer = newSinger;
        song.link = newLink;
        updateSongList();
    } else {
        alert("Invalid input for editing song.");
    }
}

function toggleSongCheck(index) {
    songList[index].checked = !songList[index].checked;
    updateSongList();
}

document.getElementById('logout-button').addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to logout?");
    
    if (confirmation) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'shop.html';
    }
});
