let maxint = 5;
let buttonRandom = document.querySelector('.button_random');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function playNewRandom () {
    let num = getRandomInt(maxint);
};


buttonRandom.addEventListener('click', playNewRandom);

let about = document.querySelector('.header__menu-link');
about.addEventListener('click', addActive);
let modal = document.querySelector('.modal');
let cover = document.querySelector('.cover');

let modalClose = document.querySelector('.modal__close');
modalClose.addEventListener('click', addActive);

function addActive () {
    this.classList.toggle('_active');
    modal.classList.toggle('_active');
    cover.classList.toggle('_active');
}