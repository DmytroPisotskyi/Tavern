const playMusic = './img/music.png';
const pauseAudio = './img/stop.png'

const audio = document.querySelector('.audio');
const playBtn = document.querySelector('.button-play');
const img = document.querySelector('.img');

playBtn.addEventListener('click', () => {
    if(audio.paused) {
        audio.play();
        img.src = pauseAudio
    } else {
        audio.pause();
        img.src = playMusic
    }
    
})