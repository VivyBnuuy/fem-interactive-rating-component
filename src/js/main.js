"use strict";

// Get the elements for the stars
let starContainerElement = document.getElementsByClassName("review-feedback__list-star");

// Add event listeners
function starContainerListener() {
    for (let i = 0; i < 5;) {
        starContainerElement[i].addEventListener("mouseenter", starContainerEnter);
        starContainerElement[i].addEventListener("mouseleave", starContainerLeave);
        starContainerElement[i].addEventListener("click", starContainerClick);
        i++;
    }
}

// Add event listeners on load
document.onload = starContainerListener();

// Change the background color of target star and its previous siblings
function starContainerEnter(e) {
    let tgt = e.currentTarget;
    while (tgt.previousElementSibling) {
        tgt.style.backgroundColor = "var(--orange)";
        tgt = tgt.previousElementSibling;

        // The first star has no previous sibling, so change it manually after all the other stars have been changed
        starContainerElement[0].style.backgroundColor = "var(--orange)";
    }

    // To change the color if more than 1 star was hovered first
    e.target.style.backgroundColor = "var(--orange)";
}

// Reset background colors once mouse isn't over stars
function starContainerLeave() {
    for (let i = 0; i < 5;) {
        starContainerElement[i].style.backgroundColor = "var(--dark-blue)";
        i++;
    }
}

// Change the colors of the stars and the background color on click
let clickedStar = '<svg class="review-star" width="100%" height="100%" viewBox="0 0 101 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M54.026,5.168l11.056,22.395c0.622,1.266 1.833,2.144 3.222,2.344l24.722,3.595c2.095,0.308 3.664,2.125 3.664,4.243c0,1.154 -0.466,2.261 -1.292,3.068l-17.889,17.433c-1.008,0.985 -1.47,2.405 -1.233,3.795l4.222,24.616c0.041,0.238 0.061,0.479 0.061,0.72c0,2.353 -1.936,4.289 -4.289,4.289c-0.695,-0 -1.379,-0.169 -1.994,-0.492l-22.111,-11.622c-1.248,-0.655 -2.741,-0.655 -3.989,-0l-22.111,11.622c-0.614,0.321 -1.296,0.488 -1.988,0.488c-2.353,0 -4.289,-1.936 -4.289,-4.288c-0,-0.241 0.02,-0.48 0.06,-0.717l4.222,-24.616c0.24,-1.39 -0.222,-2.812 -1.233,-3.795l-17.889,-17.433c-0.825,-0.807 -1.291,-1.913 -1.291,-3.068c0,-2.119 1.572,-3.937 3.669,-4.243l24.717,-3.595c1.392,-0.204 2.599,-1.082 3.222,-2.344l11.055,-22.395c0.725,-1.462 2.222,-2.39 3.853,-2.39c1.632,-0 3.128,0.928 3.853,2.39Z" style="fill:currentcolor;fill-rule:nonzero;"/><title>A star icon.</title></svg>';
let resetStar = '<svg class="review-star" width="100%" height="100%" viewBox="0 0 562 528" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><g><path d="M300.145,28.713l61.42,124.413c3.456,7.038 10.185,11.914 17.901,13.025l137.346,19.969c11.635,1.729 20.37,11.821 20.37,23.581c0,6.419 -2.593,12.561 -7.191,17.037l-99.383,96.852c-5.617,5.463 -8.179,13.364 -6.852,21.08l23.457,136.759c0.216,1.327 0.339,2.655 0.339,4.013c0,13.055 -10.771,23.827 -23.827,23.827c-3.858,-0 -7.654,-0.957 -11.08,-2.747l-122.84,-64.568c-6.944,-3.642 -15.216,-3.642 -22.16,-0l-122.84,64.568c-3.395,1.79 -7.191,2.716 -11.049,2.716c-13.056,-0 -23.827,-10.772 -23.827,-23.827c-0,-1.327 0.123,-2.655 0.339,-3.982l23.457,-136.759c1.327,-7.716 -1.235,-15.617 -6.852,-21.08l-99.383,-96.852c-4.598,-4.476 -7.16,-10.618 -7.16,-17.037c-0,-11.791 8.704,-21.883 20.37,-23.581l137.315,-19.969c7.747,-1.142 14.445,-6.018 17.901,-13.025l61.42,-124.413c4.013,-8.117 12.346,-13.272 21.42,-13.272c9.043,0 17.376,5.155 21.389,13.272Z" style="fill:currentcolor;fill-opacity:0;fill-rule:nonzero;stroke:currentcolor;stroke-width:40px;"/></g></g><title>A star icon.</title></svg>';
let canSubmit = false;
let rating = 1;

function starContainerClick(e) {
    let tgt = e.currentTarget;

    errorElement[0].style.display = "none";

    // Reset the next stars if user changes their review to a lower rating
    while (tgt.nextElementSibling) {
        tgt.nextElementSibling.innerHTML = resetStar;
        tgt = tgt.nextElementSibling;
    }

    tgt = e.currentTarget;

    // If only the first start is clicked
    if (tgt.previousElementSibling == null) {
        e.target.innerHTML = clickedStar;
        canSubmit = true;
    
        errorElement[0].style.display = "none";

        rating = 1;

    } else {
        while (tgt.previousElementSibling) {
            tgt.innerHTML = clickedStar;
            tgt = tgt.previousElementSibling;
    
            // The first star has no previous sibling, so change it manually after all the other stars have been changed
            starContainerElement[0].innerHTML = clickedStar;

            rating++;

            canSubmit = true;
        }
    }
}

// Submit button - Display error message if no review has been entered
let errorElement = document.getElementsByClassName("review-feedback__error");
let submitButtonElement = document.getElementsByClassName("review-feedback__button");

let reviewFeedbackElement = document.getElementsByClassName("review-feedback");
let reviewThankyouElement = document.getElementsByClassName("review-thankyou");

function submitListener() {
    submitButtonElement[0].addEventListener("click", submitReview);
}

document.onload = submitListener();

function submitReview() {
    if (canSubmit == true) {
        reviewFeedbackElement[0].style.display = "none";
        reviewThankyouElement[0].style.display = "flex";

        // Show the rating on the thank you part
        let ratingNumber = document.getElementsByClassName("review-thankyou__selection");

        ratingNumber[0].innerHTML = "You selected " + rating + " out of 5";
        
    } else {
        errorElement[0].style.display = "flex";
    }
}