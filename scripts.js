function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

function toggleDetail(id) {
    const detail = document.getElementById(id);
    const plusMinus = detail.previousElementSibling.querySelector('.plus-minus');
    if (detail.style.display === 'block') {
        detail.style.display = 'none';
        plusMinus.textContent = '+';
    } else {
        detail.style.display = 'block';
        plusMinus.textContent = '-';
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openGmailCompose(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:nishantbaruah3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Add this script to your existing JavaScript file

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});







