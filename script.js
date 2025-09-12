// ===== Toggle Navbar (Mobile Menu) =====
const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('fa-times'); // swap icon
});

// ===== Typing Effect =====
const typedTextSpan = document.querySelector(".typing-text span");
const words = ["Software Developer", "Youtuber", "Singer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 120;
let erasingDelay = 80;
let newWordDelay = 2000;

function type() {
    if (!isDeleting && charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else if (isDeleting && charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, erasingDelay);
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(type, newWordDelay);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, typingDelay + 250);
});

// ===== Contact Form Alert =====
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});
