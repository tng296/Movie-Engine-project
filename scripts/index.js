let intervalId;
let thumbnails = [
    "images/movie/Batman.jpg",
    "images/movie/Dark.jpg",
    "images/movie/Freedom.jpg",
    "images/movie/Wood.jpg",
    "images/movie/Alone.jpg",
];
let thumbnailQueue = [
    "images/movie/Army of The Dead.jpg",
    "images/movie/Judge.jpg",
    "images/movie/Adam Driver.jpg",
    "images/movie/Escape Room.jpg",
    "images/movie/BloodShot.jpg",
];



let firstTB = thumbnails[0];
let lastTB = thumbnails[thumbnails.length - 1];

function openTab(evt, tabName) {

    var i, tabcontent, tablinks;


    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";

    if (tabName === 'Browse') {
        //run this function for automatic scroll from right to left, no need to click
        dynamicScroll();
        // Simulate a click on the scroll buttons, we do this because the images are not loaded yet
        document.querySelector('.leftscrollbuttonstyle img').click();
        document.querySelector('.rightscrollbuttonstyle img').click();
    }
}
function dynamicScroll() {
    displayThumbnails();
    intervalId = setInterval(() => {

        thumbnailQueue.push(firstTB);
        thumbnails.shift();
        thumbnailContent.shift();
        thumbnails.push(thumbnailQueue[0]);
        thumbnailContent.push(thumbnailmap[thumbnailQueue[0]]);
        thumbnailQueue.shift();
        firstTB = thumbnails[0];
        lastTB = thumbnails[thumbnails.length - 1];
        displayThumbnails();
    }, 3000);
}

function getImageTitle(filePath) {
    let filename = filePath.split('/').pop().split('.').slice(0, -1).join('.');
    return '    ' + filename;
}

function displayThumbnails() {
    let thumbnailsContainer = document.getElementById("thumbnails-container");
    thumbnailsContainer.innerHTML = thumbnails
        .map((thumbnail) => `
            <div class="thumbnail-item">
                <img src="${thumbnail}" alt="${getImageTitle(thumbnail)}"/>
                <h5 class="thumbnail title">  ${getImageTitle(thumbnail)}</h5>
            </div>
        `)
        .join(""); // Join the array of strings to form a single string
}


function leftScroll() {
    clearInterval(intervalId);
    thumbnailQueue.push(thumbnails.shift());
    thumbnails.push(thumbnailQueue.shift());
    displayThumbnails();
}

function rightScroll() {
    clearInterval(intervalId);
    thumbnailQueue.unshift(thumbnails.pop());
    thumbnails.unshift(thumbnailQueue.pop());
    displayThumbnails();
}

window.onload = function () {
    document.getElementById("Home").style.display = "flex";
    document.getElementById("defaultOpen").className += " active";
};
//adding movie api
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "6c214e6d";
    const searchBox = document.getElementById('search-box');
    const resultContainer = document.getElementById('result');

    searchBox.addEventListener('submit', async (event) => {
        event.preventDefault();

        const movieInput = document.getElementById('movie');
        const movie = movieInput.value;

        const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            const resultHTML = `
                <img class="img-thumbnail" src="${data.Poster}" alt="Movie Poster"/>
                <div class="movie-detail">
                    <h3>Movie Title: ${data.Title}</h3>
                    <h3>Year: ${data.Year}</h3>
                    <h3>Director: ${data.Director}</h3>
                    <h3>Actors: ${data.Actors}</h3>
                    <h3>Metascore: ${data.Metascore}</h3>
                    <h3>IMDB: ${data.imdbRating}</h3>
                    <h3>Plot: ${data.Plot}</h3>
                </div>
            `;

            resultContainer.innerHTML = resultHTML;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});