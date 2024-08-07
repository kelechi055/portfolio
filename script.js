// RemoveS loader and show content after page THE has fully loaded
 window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('fadeOut'); adds a fade out effect
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.classList.add('loaded');
    }, 500); // Delays the loader
});

const navLinks = document.querySelectorAll('.navbar a');
    
// Get the current URL path
const currentPath = window.location.pathname;

// Loop through each link and add the 'active' class if the href matches the current path
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

function countUp(el, start, end, duration) {
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        el.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
    const codingYears = document.querySelector('.numbers.coding-years');
    const programmingHours = document.querySelector('.numbers.programming-hours');
    const SubscriberCount = document.querySelector('.numbers.sub-count');

    countUp(codingYears, 0, 3, 2000); // Counts up to 3+ in 2 second
    countUp(programmingHours, 0, 500, 3000); // Counts up to 1000+ in 3 seconds
    countUp(SubscriberCount, 0, 23000, 3000)
});

const texts = [
    "a {CompSci Student.}",
    "a <Software Dev/>.",
    "a /Graphic Designer",
    "a [Content Creator]"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => {
            document.getElementById('typing-text').textContent = '';
            type();
        }, 1000); // Waits for 2 seconds before starting to type the next sentence
    } else {
        setTimeout(type, 100);
    }
}());

// BG

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const radius = 400; // Radius of the cursor glow

    const background = document.getElementById('background');
    background.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.6) ${radius}px, rgba(0, 0, 0, 0.9) ${radius * 2}px)`;
});

