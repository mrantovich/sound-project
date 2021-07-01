let soundArray = [];
let soundList = ['https://mrantovich.github.io/sound-project/audio/sound-01.mp3', 'https://mrantovich.github.io/sound-project/audio/sound-02.mp3', 'https://mrantovich.github.io/sound-project/audio/sound-03.mp3'];
let maxint = soundList.length;

soundList.forEach(element => soundArray.push(new Howl({
        src: element,
        format: 'mp3',
        onplay: function() {
            requestAnimationFrame(makeStep);
        },
    })
));


const mainUI = document.querySelector('.main__ui-text');
const buttonRandom = document.querySelector('.button_random');
const buttonRepeat = document.querySelector('.button_repeat');
const progress = document.querySelector('.main__ui-progress');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

let num = getRandomInt(maxint);
let track = soundArray[num];
let curTrackName = soundList[num].split('/')[5];

function disableButtons() {
    buttonRandom.classList.add('_disabled');
    buttonRepeat.classList.remove('_disabled');
};

function enableButtons() {
    buttonRandom.classList.remove('_disabled');
    buttonRepeat.classList.add('_disabled');
};

function makeStep() {
    let seek = track.seek() || 0;
    let progressWidth = (((seek / track.duration()) * 100 ) || 0) + "%";
    progress.style.width = progressWidth;
    if (track.playing()) {
        requestAnimationFrame(makeStep);
    };
};

function playNow(norepeat=true) {
    if (norepeat) {
        num = getRandomInt(maxint);
        track = soundArray[num];
        curTrackName = soundList[num].split('/')[5];

        Howler.stop();
        track.play();
    }

    else {
        track.stop();
        track.play();
    };

    track.on('play', disableButtons);
    track.on('end', enableButtons);

    
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