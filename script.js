"use strict";
const slider = document.querySelector(".slideshow");
const arrowLeft = document.querySelector(".first-slider");
const arrowRight = document.querySelector(".second-slider");
const body = document.querySelector(".everything");
const firstImg = document.querySelector(".first-image");
let count = 0;
arrowRight.addEventListener('click', ()=>{
    slider.style.transition = 'transform 0.4s ease-in-out';
    if(count >= 2) return;
    count++;
    if(firstImg.height == 180) {
        slider.style.transform = `translateX(${-270*count}px)`;
    }
    if(firstImg.height == 360) {
        slider.style.transform = `translateX(${-540*count}px)`;
    }
    
    
});

arrowLeft.addEventListener('click', ()=>{
    slider.style.transition = 'transform 0.4s ease-in-out';
    if(count <= -2) return;
    count--;
    if(firstImg.height == 180) {
        slider.style.transform = 'translateX(' + (-270 * count) + 'px)';
    }
    if(firstImg.height == 360) {
        slider.style.transform = 'translateX(' + (-540 * count) + 'px)';
    }
});
