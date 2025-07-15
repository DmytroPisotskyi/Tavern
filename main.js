

let countdownDate = new Date('18 july, 2025 18:00:00').getTime()

function prulalaze(value, singular, prulal) {
    return value === 1 ? singular: prulal;
}

function format(value) {
    return value < 10? '0' + value: value
}

let interval = setInterval(()=> {

let now = new Date().getTime()
let remainigTime = countdownDate - now;

if (remainigTime <= 0) {
    document.querySelector('.days').textContent = '00';
    document.querySelector('.hours').textContent = '00';
    document.querySelector('.minutes').textContent = '00';
    document.querySelector('.seconds').textContent= '00';

}

let days = Math.floor(remainigTime / (1000 * 60 * 60 * 24));
let hours = Math.floor(remainigTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let minutes = Math.floor(remainigTime % (1000 * 60 * 60) / (1000 * 60));
let seconds = Math.floor(remainigTime % (1000 * 60) / 1000);

document.querySelector('.days').textContent = format(days);
document.querySelector('.hours').textContent = format(hours);
document.querySelector('.minutes').textContent = format(minutes);
document.querySelector('.seconds').textContent= format(seconds);

document.querySelector('.days-text').textContent = prulalaze(days, 'day', 'days');
document.querySelector('.hours-text').textContent = prulalaze(hours, 'hour', 'hours');
document.querySelector('.mitutes-text').textContent = prulalaze(minutes, 'minute', 'minutes');
document.querySelector('.seconds-text').textContent = prulalaze(seconds, 'second', 'seconds');

}, 1000);