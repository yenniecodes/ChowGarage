console.log("Website loaded successfully");
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggler");
    if (navbarToggle) {
        navbarToggle.addEventListener("click", function () {
            console.log("Navbar toggled!");
        });
    }
    const chowSection = document.querySelector(".chow-section");
    const burgarageSection = document.querySelector(".burgarage-section");

    function handleScrollAnimation() {
        if (chowSection) {
            const chowSectionTop = chowSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (chowSectionTop < windowHeight - 100) {
                chowSection.classList.add("animate");
            }
        }

        if (burgarageSection) {
            const burgarageSectionTop = burgarageSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (burgarageSectionTop < windowHeight - 100) {
                burgarageSection.classList.add("animate");
            }
        }
    }
    window.addEventListener("scroll", handleScrollAnimation);
});


