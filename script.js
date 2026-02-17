// script.js

// Countdown Timer
const countdown = () => {
    const eventDate = new Date('2026-02-17T07:50:30Z').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = 'EVENT HAS STARTED';
    }
};

setInterval(countdown, 1000);

// Music Control
const audio = new Audio('path_to_your_music.mp3');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

// RSVP Form
const rsvpForm = document.getElementById('rsvp-form');

rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const attending = event.target.attending.checked;
    alert(`Thank you ${name} for your RSVP! Attending: ${attending}`);
});

// Animations
const animateElement = (element) => {
    element.style.transition = 'transform 0.5s';
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 500);
};

const elementToAnimate = document.getElementById('animate');

elementToAnimate.addEventListener('mouseover', () => animateElement(elementToAnimate));
