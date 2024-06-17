document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000);

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '') {
            alert('Name is required.');
            event.preventDefault();
            return;
        }

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        if (message === '') {
            alert('Message is required.');
            event.preventDefault();
        }
    });
});
