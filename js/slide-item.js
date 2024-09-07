let currentindex = 0;
    const item = document.querySelectorAll('.product');
    const totalItems = item.length;

    function showNextItem(){
        const products = document.querySelector('.products');
        currentindex = (currentindex + 1) % totalItems;
        const offset = -currentindex * 250;
        products.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextItem, 2000);