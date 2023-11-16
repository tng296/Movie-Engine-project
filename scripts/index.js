let intervalId;
let thumbnails = [
    "images/movie/movie1.jpg",
    "images/movie/movie2.jpg",
    "images/movie/movie3.jpg",
    "images/movie/movie4.jpg",
    "images/movie/movie5.jpg",
];
let thumbnailQueue = [
    "images/movie/movie6.jpg",
    "images/movie/movie7.jpg",
    "images/movie/movie8.jpg",
    "images/movie/movie9.jpg",
    "images/movie/movie10.jpg",
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

window.onload = function() {
    document.getElementById("Home").style.display = "flex";
    document.getElementById("defaultOpen").className += " active";
    dynamicScroll();
};

