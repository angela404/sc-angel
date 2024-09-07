const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
