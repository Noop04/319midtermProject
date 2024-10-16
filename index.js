
function appendData(data) {
    var CardArtist = document.getElementById("col");
    const m = document.getElementById("artists");
    const inputArtistName = m.value
    CardArtist.innerHTML = ""; // This will clear the previous movie data and image
    for (let i = 0; i < Object.keys(data.artists).length; i++) {
        if (data.artists[i].name === inputArtistName) {
            let name = data.artists[i].name;
            let desc = data.artists[i].desc;
            let listeners = data.artists[i].listeners;
            let url = data.artists[i].url;
            console.log(name);
            let AddCardArtist = document.createElement("div");
            AddCardArtist.classList.add("col"); // Add Bootstrap class to the column
            AddCardArtist.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> <strong>${name}</strong>, ${desc},${listeners}</p>
                </div>
            </div>
            `;
            CardArtist.appendChild(AddCardArtist);
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



function showAllArtists() { // shows all artist called when clicked in navbar
    fetch("./data.json")
        .then(response => response.json())
        .then(myArtists => loadArtists(myArtists, 1, style))
        .catch(err => console.log("Error :" + err));
}

// sorted by style, called when clicking in home
function showArtistsByStyle(style) {
    fetch("./data.json")
        .then(response => response.json())
        .then(myArtists => loadArtists(myArtists, 2, style))
        .catch(err => console.log("Error :" + err));
}



function loadArtists(myArtists, option, style) {

    let arrayArtists = [];
    let sortedArtists = [];

    for (let i = 0; i < myArtists.movies.length; i++) {
        arrayArtists.push(myArtists.movies[i])
    }

    if (option === 1) {
        // Show all artists
        sortedArtists = arrayArtists;
    }
    // Option 2 is to sort by style if style is rap then show all rap artists
    else if (option === 2) {
        // Filter artists by style
        for (let artist of arrayArtists) {
            if (artist.style === style) {
                sortedArtists.push(artist);
            }
        }
    }

    else if (option === 3) {  
        const inputDescription = document.getElementById("descriptionInput").value;
        document.getElementById('inputField').style.display = 'none';
        for (let movie of arrayArtists) {
            if (movie.description.includes(inputDescription)) {
                sortedArtists.push(movie);
            }
        }
        console.log(sortedArtists);
    }



    var CardMovie = document.getElementById("col");
    CardMovie.innerHTML = "";


    for (let i = 0; i < sortedArtists.length; i++) {
        let title = sortedArtists[i].name;
        let listeners = sortedArtists[i].listeners;
        let url = sortedArtists[i].url;

        let description = sortedArtists[i].description
        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col");
        AddCardMovie.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"><strong>${title}</strong>, ${listeners}, $${price}, ${description}</p>
                </div>
            </div>
        `;
        CardMovie.appendChild(AddCardMovie);
    }
}





















fetchData();