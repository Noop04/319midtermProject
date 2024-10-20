function showArtist(artist) {
    fetch("./data.json")
        .then(response => response.json())
        .then(mySongs => loadSongs(mySongs, artist))
        .catch(err => console.log("Error :" + err));
}

function loadSongs(mySongs, artist) {
    // ---------------------
    // make array of objects
    // ---------------------
    const arraySongs = [];

    for (let i = 0; i < mySongs.songs.length; i++) {
        arraySongs.push(mySongs.songs[i]);
    }

    console.log(arraySongs);

    // ---------------------
    // sort array
    // ---------------------
    let sortedSongs = [];

    // Filter the array of songs by the given artist
    console.log(artist);
    sortedSongs = arraySongs.filter(song => song.artist === artist);

    // If no songs match the artist, return a message
    if (sortedSongs.length === 0) {
        console.log(`No songs found for ${artist}`);
    }

    // Add Artist Text
    var ArtistTitle = document.getElementById("artist-title");
    ArtistTitle.innerHTML = artist.toUpperCase();

    // ---------------------
    // Construct the CARD
    // ---------------------
    var CardSongs = document.getElementById("col");
    // Clear previous songs data
    CardSongs.innerHTML = ""; // This will clear the previous songs data and image

    for (var i = 0; i < sortedSongs.length; i++) {
        let name = sortedSongs[i].name;
        let artist = sortedSongs[i].artist;
        let album = sortedSongs[i].album;
        let streams = sortedSongs[i].streams;
        let date = sortedSongs[i].date;
        let url = sortedSongs[i].url;
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
    } // end of for
} // end of function appendData


/* function appendData(data) {
    var CardSong = document.getElementById("col");
    const m = document.getElementById("songs");
    const inputSongName = m.value
    CardSong.innerHTML = ""; // This will clear the previous songs data and image
    for (let i = 0; i < Object.keys(data.songs).length; i++) {
        if (data.songs[i].name === inputSongName) {
            let name = data.songs[i].name;
            let desc = data.songs[i].desc;
            let listeners = data.songs[i].listeners;
            let url = data.songs[i].url;
            console.log(name);
            let AddCardSong = document.createElement("div");
            AddCardSong.classList.add("col"); // Add Bootstrap class to the column
            AddCardSong.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> <strong>${name}</strong>, ${desc},${listeners}</p>
                </div>
            </div>
            `;
            CardSong.appendChild(AddCardSong);
        }
    }
}



function fetchData() {
    const b = document.getElementById("my_form");
    b.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        fetch("./data.json")
            .then((response) => { return response.json() })
            .then((data) => { appendData(data) })
            .catch((error) => { console.log("Error " + error) });
        console.log("End fetch");
    });
}



function showAllSongs() { // shows all song called when clicked in navbar
    fetch("./data.json")
        .then(response => response.json())
        .then(mySongs => loadSongs(mySongs, 1, style))
        .catch(err => console.log("Error :" + err));
}

// sorted by style, called when clicking in home
function showSongsByStyle(style) {
    fetch("./data.json")
        .then(response => response.json())
        .then(mySongs => loadSongs(mySongs, 2, style))
        .catch(err => console.log("Error :" + err));
}



function loadSongs(mySongs, option, style) {

    let arraySongs = [];
    let sortedSongs = [];

    for (let i = 0; i < mySongs.songs.length; i++) {
        arraySongs.push(mySongs.songs[i])
    }

    if (option === 1) {
        // Show all songs
        sortedSongs = arraySongs;
    }
    // Option 2 is to sort by style if style is rap then show all rap songs
    else if (option === 2) {
        // Filter songs by style
        for (let song of arraySongs) {
            if (song.style === style) {
                sortedSongs.push(song);
            }
        }
    }

    else if (option === 3) {  
        const inputDescription = document.getElementById("descriptionInput").value;
        document.getElementById('inputField').style.display = 'none';
        for (let songs of arraySongs) {
            if (songs.description.includes(inputDescription)) {
                sortedSongs.push(songs);
            }
        }
        console.log(sortedSongs);
    }



    var CardSongs = document.getElementById("col");
    CardSongs.innerHTML = "";


    for (let i = 0; i < sortedSongs.length; i++) {
        let title = sortedSongs[i].name;
        let listeners = sortedSongs[i].listeners;
        let url = sortedSongs[i].url;

        let description = sortedSongs[i].description
        let AddCardSongs = document.createElement("div");
        AddCardSongs.classList.add("col");
        AddCardSongs.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"><strong>${title}</strong>, ${listeners}, $${price}, ${description}</p>
                </div>
            </div>
        `;
        CardSongs.appendChild(AddCardSongs);
    }
}





















fetchData(); */