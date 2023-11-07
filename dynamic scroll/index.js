
var $ = function (id)
{
    return document.getElementById(id);
}

let intervalId;
let thumbnails = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg"];
let thumbnailQueue = ["movie6.jpg", "movie7.jpg", "movie8.jpg", "movie9.jpg", "movie10.jpg"];
let firstTB = thumbnails[0];
let lastTB = thumbnails[thumbnails.length - 1];


function dynamicScroll()
{
    displayThumbnails();
    // Start dynamic scrolling
    intervalId = setInterval(() => {
        thumbnailQueue.push(firstTB);
        thumbnails.shift();
        thumbnails.push(thumbnailQueue[0]);
        thumbnailQueue.shift();
        firstTB = thumbnails[0];
        lastTB = thumbnails[thumbnails.length - 1];

        displayThumbnails();
    }, 3000); // Adjust the interval as needed
}
function displayThumbnails()
{
    let thumbnailsContainer = $("thumbnails-container");
    thumbnailsContainer.innerHTML = thumbnails.map(thumbnail => `<img src="${thumbnail}" />`).join('');
}

function leftScroll()
{

    clearInterval(intervalId);

    thumbnailQueue.push(thumbnails.shift());
    thumbnails.push(thumbnailQueue.shift());

    displayThumbnails();
}

function rightScroll()
{

    clearInterval(intervalId);

    thumbnailQueue.unshift(thumbnails.pop());
    thumbnails.unshift(thumbnailQueue.pop());

    displayThumbnails();
}