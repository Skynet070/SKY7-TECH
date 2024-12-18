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
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility); // Check on load as well
