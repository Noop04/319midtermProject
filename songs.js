let filteredSongs = [];

function showArtist(artist) {
    fetch("./data.json")
        .then(response => response.json())
        .then(mySongs => loadSongs(mySongs, artist))
        .catch(err => console.log("Error :" + err));
}

function loadSongs(mySongs, artist) {
    const arraySongs = [];

    for (let i = 0; i < mySongs.songs.length; i++) {
        arraySongs.push(mySongs.songs[i]);
    }

    if (artist != 'All Artists') {
        filteredSongs = arraySongs.filter(song => song.artist === artist);
        if (filteredSongs.length === 0) {
            console.log(`No songs found for ${artist}`);
        }
    } else {
        filteredSongs = arraySongs;
    }

    // Default sort by streams
    sortSongs(1);

    // Display the artist's songs
    displaySongs(filteredSongs, artist);
}

function displaySongs(songs, artist) {
    // Update Artist Text
    var ArtistTitle = document.getElementById("artist-title");
    ArtistTitle.innerHTML = artist.toUpperCase();


    var CardSongs = document.getElementById("col");
    CardSongs.innerHTML = ""; // Clear the previous song data

    // Display songs in cards
    for (var i = 0; i < songs.length; i++) {
        let name = songs[i].name;
        let artist = songs[i].artist;
        let album = songs[i].album;
        let streams = songs[i].streams;
        let date = songs[i].date;
        let url = songs[i].url;

        let AddCardSongs = document.createElement("div");
        AddCardSongs.classList.add("col"); // Add Bootstrap class to the column
        AddCardSongs.innerHTML = `
        <div class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text"> <strong>${name}</strong> — ${artist}<p>
                <p>Featured in: ${album}<p>
                <p>Released in: ${date}<p>
                <p>Total streams: ${streams}</p>
            </div>
        </div>
        `;
        CardSongs.appendChild(AddCardSongs);
    }
}

function sortSongs(sortType) {
    if (sortType === 1) {
        // Sort by streams
        filteredSongs.sort((a, b) => {
            // Removes commas to make streams a number, idea from https://www.basedash.com/blog/how-to-remove-commas-from-a-string-in-javascript
            const streamsA = parseInt(a.streams.replace(/,/g, ''), 10);
            const streamsB = parseInt(b.streams.replace(/,/g, ''), 10);
            return streamsB - streamsA;
        });
    } else if (sortType === 2) {
        // Sort by date
        filteredSongs.sort((a, b) => b.date - a.date);
    }

    // Display songs
    displaySongs(filteredSongs, document.getElementById("artist-title").innerHTML);
}