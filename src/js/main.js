"use strict";

// Get the elements for the stars
let starContainerElement = document.getElementsByClassName("review-feedback__list-star");

function starContainerListener() {
    for (let i = 0; i < 5;) {
        starContainerElement[i].addEventListener("mouseenter", starContainerEnter);
        starContainerElement[i].addEventListener("mouseleave", starContainerLeave);
        i++;
    }
}

document.onload = starContainerListener();

function starContainerEnter(e) {
    if (e.target.previousElementSibling != null) {
        e.target.style.backgroundColor = "var(--orange)";
        e.target.previousElementSibling.style.backgroundColor = "var(--orange)";

        console.log(e.target);
    } else {
        e.target.style.backgroundColor = "var(--orange)";
    }
}

function starContainerLeave() {
    for (let i = 0; i < 5;) {
        starContainerElement[i].style.backgroundColor = "var(--dark-blue)";
        i++;
    }
}