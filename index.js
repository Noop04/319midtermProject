function showGenre(genre) {
    fetch("./data.json")
        .then(response => response.json())
        .then(myArtists => loadArtists(myArtists, genre))
        .catch(err => console.log("Error :" + err));
}

function loadArtists(myArtists, genre) {
    // ---------------------
    // make array of objects
    // ---------------------
    const arrayArtists = [];

    for (let i = 0; i < myArtists.artists.length; i++) {
        arrayArtists.push(myArtists.artists[i]);
    }

    console.log(arrayArtists);

    // ---------------------
    // sort array
    // ---------------------
    let sortedArtists = [];

    // Filter the array of artists by the given genre
    console.log(genre);
    sortedArtists = arrayArtists.filter(artist => artist.style === genre);

    // If no artists match the genre, return a message
    if (sortedArtists.length === 0) {
        console.log(`No artists found for ${genre}`);
    }

    // ---------------------
    // Construct the CARD
    // ---------------------
    var CardArtists = document.getElementById("col");
    // Clear previous artists data
    CardArtists.innerHTML = ""; // This will clear the previous artists data and image

    for (var i = 0; i < sortedArtists.length; i++) {
        let name = sortedArtists[i].name;
        let style = sortedArtists[i].style;
        let desc = sortedArtists[i].desc;
        let listeners = sortedArtists[i].listeners;
        let url = sortedArtists[i].url;
        let AddCardArtists = document.createElement("div");

        AddCardArtists.classList.add("col"); // Add Bootstrap class to the column
        AddCardArtists.innerHTML = `
        <div class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text"> <strong>${name}</strong><p>
                <p>${desc}<p>
                <p>${listeners} monthly listeners</p>
            </div>
        </div>
        `;
        CardArtists.appendChild(AddCardArtists);
    } // end of for
} // end of function appendData


/* function appendData(data) {
    var CardArtist = document.getElementById("col");
    const m = document.getElementById("artists");
    const inputArtistName = m.value
    CardArtist.innerHTML = ""; // This will clear the previous artists data and image
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

    for (let i = 0; i < myArtists.artists.length; i++) {
        arrayArtists.push(myArtists.artists[i])
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
        for (let artists of arrayArtists) {
            if (artists.description.includes(inputDescription)) {
                sortedArtists.push(artists);
            }
        }
        console.log(sortedArtists);
    }



    var CardArtists = document.getElementById("col");
    CardArtists.innerHTML = "";


    for (let i = 0; i < sortedArtists.length; i++) {
        let title = sortedArtists[i].name;
        let listeners = sortedArtists[i].listeners;
        let url = sortedArtists[i].url;

        let description = sortedArtists[i].description
        let AddCardArtists = document.createElement("div");
        AddCardArtists.classList.add("col");
        AddCardArtists.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"><strong>${title}</strong>, ${listeners}, $${price}, ${description}</p>
                </div>
            </div>
        `;
        CardArtists.appendChild(AddCardArtists);
    }
}





















fetchData(); */