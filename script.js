document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Account for the header height
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code here
    
    // Countdown timer code
    const weddingDate = new Date("2024-04-27T00:00:00").getTime();

    const countdown = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeRemaining = weddingDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "The wedding has arrived!";
        }
    }, 1000);
});


//Photo Slide Show

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if (active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval (()=> {next.click()},7000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    //clearInterval = setInterval(()=> {next.click()},9000);
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 7000); // Start a new interval
    //let refreshSlider = setInterval (()=> {next.click()},9000);

}

dots.forEach((li, key) => {
    li.addEventListener('click',function(){
        active = key;
        reloadSlider();

    })
})

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Function to toggle the mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('show-mobile-menu');
    }

    // Toggle mobile menu on hamburger icon click
    hamburgerMenu.addEventListener('click', toggleMobileMenu);

    // Smooth scrolling for navigation links (both desktop and mobile menus)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            // Hide mobile menu when a link is clicked (for mobile view)
            if (mobileMenu.classList.contains('show-mobile-menu')) {
                toggleMobileMenu();
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');

    // Function to toggle the mobile menu container
    function toggleMobileMenu() {
        mobileMenuContainer.classList.toggle('show-mobile-menu');
    }

    // Toggle mobile menu container on hamburger icon click
    hamburgerMenu.addEventListener('click', toggleMobileMenu);

    // Smooth scrolling for navigation links (both desktop and mobile menus)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            // Hide mobile menu container when a link is clicked (for mobile view)
            if (mobileMenuContainer.classList.contains('show-mobile-menu')) {
                toggleMobileMenu();
            }
        });
    });
});
