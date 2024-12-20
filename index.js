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
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility); // Check on load as well

// Get the video advert element
const videoAdvert = document.getElementById('video-advert');

// Add event listener to play video when visible
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    videoAdvert.play();
  } else {
    videoAdvert.pause();
  }
});

// Add event listener to pause video when user interacts with page
document.addEventListener('click', () => {
  videoAdvert.pause();
});

document.addEventListener('scroll', () => {
  videoAdvert.pause();
});

document.addEventListener('keydown', () => {
  videoAdvert.pause();
});

const ticker = document.getElementById('ticker');
    
    // Pause animation on hover
    ticker.addEventListener('mouseenter', () => {
        ticker.querySelector('.ticker').style.animationPlayState = 'paused';
    });

    // Resume animation when mouse leaves
    ticker.addEventListener('mouseleave', () => {
        ticker.querySelector('.ticker').style.animationPlayState = 'running';
    });

    // Function to open video in a new tab
    function openVideo(videoSrc) {
        window.open(videoSrc, '_blank');
    }
