window.addEventListener("scroll", function(){
    const navbar = document.querySelector('#nav')

    if(window.pageYOffset >= 100){
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
    }
})

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop ) {
        // Jika scroll ke bawah, sembunyikan navbar
        navbar.style.top = "-90px"
        if(scrollTop >= 100){
            navbar.classList.add('header-scroll')

        }
        else{
            navbar.classList.remove('header-scroll')
        }
    }
    else{
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});