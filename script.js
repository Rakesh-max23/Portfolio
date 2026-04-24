const textArray = [
    "Building AI Systems",
    "Designing Smart Web Apps",
    "Turning Ideas into Reality"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index >= textArray.length) index = 0;

    currentText = textArray[index];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.getElementById("typing").textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});