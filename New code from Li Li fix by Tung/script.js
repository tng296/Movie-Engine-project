let intervalId;
let thumbnails = [
    "images/movie1.jpg",
    "images/movie2.jpg",
    "images/movie3.jpg",
    "images/movie4.jpg",
    "images/movie5.jpg",
];
let thumbnailQueue = [
    "images/movie6.jpg",
    "images/movie7.jpg",
    "images/movie8.jpg",
    "images/movie9.jpg",
    "images/movie10.jpg",
];
let firstTB = thumbnails[0];
let lastTB = thumbnails[thumbnails.length - 1];

function dynamicScroll() {
    displayThumbnails();
    intervalId = setInterval(() => {
        thumbnailQueue.push(firstTB);
        thumbnails.shift();
        thumbnails.push(thumbnailQueue[0]);
        thumbnailQueue.shift();
        firstTB = thumbnails[0];
        lastTB = thumbnails[thumbnails.length - 1];
        displayThumbnails();
    }, 3000);
}

function displayThumbnails() {
    let thumbnailsContainer = document.getElementById("thumbnails-container");
    thumbnailsContainer.innerHTML = thumbnails
        .map((thumbnail) => `<img src="${thumbnail}" />`)
        .join("");
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

dynamicScroll();
