const productsContainer = document.querySelector('.products-container');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    let isDown = false;
    let startX;
    let scrollLeft;

    productsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - productsContainer.offsetLeft;
        scrollLeft = productsContainer.scrollLeft;
        productsContainer.style.cursor = 'grabbing';
    });

    productsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        productsContainer.style.cursor = 'grab';
    });

    productsContainer.addEventListener('mouseup', () => {
        isDown = false;
        productsContainer.style.cursor = 'grab';
    });

    productsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - productsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        productsContainer.scrollLeft = scrollLeft - walk;
    });

    // Add touch events for mobile devices
    productsContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - productsContainer.offsetLeft;
        scrollLeft = productsContainer.scrollLeft;
    });

    productsContainer.addEventListener('touchend', () => {
        isDown = false;
    });

    productsContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - productsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        productsContainer.scrollLeft = scrollLeft - walk;
    });

    // Slide button functionality
    scrollLeftBtn.addEventListener('click', () => {
        productsContainer.scrollBy({ left: -250, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        productsContainer.scrollBy({ left: 250, behavior: 'smooth' });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });