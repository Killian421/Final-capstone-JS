    let songList = JSON.parse(localStorage.getItem('songList')) || [];
    const songListElement = document.getElementById('song-list');

    document.getElementById('add-song').addEventListener('click', () => {
        const songName = document.getElementById('song-name').value.trim();
        const singerName = document.getElementById('singer-name').value.trim();
        const songLink = document.getElementById('song-link').value.trim();

        if (songName && singerName && songLink) {
            // Save the song to localStorage
            saveSongToStorage(songName, singerName, songLink);

            // Show an alert to confirm the song has been added
            alert("Song was added in the Music List");

            // Clear the input fields
            clearFormFields();
        } else {
            alert('Please fill out all fields.');
        }
    });

    function saveSongToStorage(name, singer, link) {
        const existingSongs = JSON.parse(localStorage.getItem('songs')) || [];
        existingSongs.push({ name, singer, link });
        localStorage.setItem('songs', JSON.stringify(existingSongs));
    }

    function updateSongList() {
        songListElement.innerHTML = '';

        songList.forEach((song) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${song.name}, by: ${song.singer}
                <a href="${song.link}" target="_blank">(Click here to Play)</a>
            `;
            songListElement.appendChild(listItem);
        });
    }

    function clearFormFields() {
        document.getElementById('song-name').value = '';
        document.getElementById('singer-name').value = '';
        document.getElementById('song-link').value = '';
    }

    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'welcome.html';
    });
