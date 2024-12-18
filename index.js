let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active-dot');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active-dot');
    }

    function currentSlide(index) {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    showSlide(currentSlideIndex); // Initialize the first slide

// Optional: Adjust the animation duration based on content length
    const ticker = document.querySelector('.ticker');
    const tickerWidth = ticker.offsetWidth;
    const containerWidth = document.querySelector('.ticker-container').offsetWidth;

    if (tickerWidth > containerWidth) {
        const duration = (tickerWidth / 100) * 10; // Adjust speed here
        ticker.style.animationDuration = `${duration}s`;
    }

    // Multicolor header change
    const colors = ['#003366', '#006699', '#0099cc', '#00ccff', '#66ccff'];
    let colorIndex = 0;

    function changeHeaderColor() {
        document.querySelector('header').style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    setInterval(changeHeaderColor, 2000); // Change header color every 2 seconds

    // On-scroll transition for current posts
    const currentPostItems = document.querySelectorAll('.current-posts ul li');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        currentPostItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
            }

            document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

            let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
    });
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlideIndex);
});

            const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility); // Check on load as well
