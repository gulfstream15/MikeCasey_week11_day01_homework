var app = function() {

    // create the <ul class="cat"> part (outer loop)
    var catUL = document.createElement('ul');
    catUL.classList.add('cat');

    // create the name
    var nameList = document.createElement('li');
    nameList.innerText = "Name: Trio";

    // create the favourite food
    var favFoodList = document.createElement('li');
    favFoodList.innerText = "Favourite food: Salmon";

    // create the image
    var image = document.createElement('img');
    image.innerText = 'width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg';

    // create the image list
    var imageList = document.createElement('li');
    //imageList.innerText = image.innerText; 

    // get the target element
    var catList = document.querySelector('#cats');

    // add the catUL to the catList in the DOM
    catList.appendChild(catUL);

    //  add the name to the catUL in the DOM
    catUL.appendChild(nameList);

    //  add the favourite food to the catUL in the DOM
    catUL.appendChild(favFoodList);

    //  add the image to the image list in the DOM
    imageList.appendChild(image);

    //  add the image list in the DOM
    catUL.appendChild(imageList);

}

window.onload = app;
