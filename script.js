const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('fa-times');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuIcon.classList.remove('fa-times');
    });
});

const typedTextSpan = document.querySelector(".typing-text span");
const words = ["Software Developer", "Youtuber", "Singer"];
let wordIndex = 0, charIndex = 0, isDeleting = false;
let typingDelay = 120, erasingDelay = 80, newWordDelay = 2000;

function type() {
    if (!isDeleting && charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++; setTimeout(type, typingDelay);
    } else if (isDeleting && charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--; setTimeout(type, erasingDelay);
    } else {
        if (!isDeleting) { isDeleting = true; setTimeout(type, newWordDelay); }
        else { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; setTimeout(type, typingDelay); }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, typingDelay + 250);
});

const progressBars = document.querySelectorAll(".progress");
let animated = false;

function showProgress() {
    const skillsSection = document.querySelector(".skills");
    const rect = skillsSection.getBoundingClientRect();

    if (!animated && rect.top < window.innerHeight && rect.bottom > 0) {
        progressBars.forEach(bar => {
            const value = bar.getAttribute("data-width");
            let width = 0;
            const interval = setInterval(() => {
                if (width >= parseInt(value)) {
                    clearInterval(interval);
                } else {
                    width++;
                    bar.style.width = width + "%";
                    bar.textContent = width + "%";
                }
            }, 15);
        });
        animated = true;
    }
}
window.addEventListener("scroll", showProgress);

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});
