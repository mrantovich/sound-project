let soundArray = [];
let soundList = ['../audio/sound-01.mp3', '../audio/sound-02.mp3', '../audio/sound-03.mp3'];
let maxint = soundList.length;

soundList.forEach(element => soundArray.push(new Howl({
        src: element
    })
));


const mainUI = document.querySelector('.main__ui-text');
const buttonRandom = document.querySelector('.button_random');
const buttonRepeat = document.querySelector('.button_repeat');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

let num = getRandomInt(maxint);
let track = soundArray[num];
let curTrackName = soundList[num].split('/')[2];

function playNow(norepeat=true) {
    if (norepeat) {
        num = getRandomInt(maxint);
        track = soundArray[num];
        curTrackName = soundList[num].split('/')[2];

        Howler.stop();
        track.play();
    }

    else {
        track.stop();
        track.play();
    }

    
    mainUI.animate([
        {opacity: 0},
        {opacity: 1}
    ], {
        duration: 600
    });
    mainUI.innerHTML = '<p>Играет: ' + curTrackName + '</p>';
};



buttonRandom.addEventListener('click', playNow);
buttonRepeat.addEventListener('click', () => {playNow(false)});

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