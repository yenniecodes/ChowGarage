console.log("Website loaded successfully");

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggle) {
        navbarToggle.addEventListener("click", function () {
            console.log("Navbar toggled!");
            navbarCollapse.classList.toggle("show"); // Toggle show class for collapse
        });
    }

    // Close the navbar when a nav link is clicked (for mobile experience)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 768) { // Only close on mobile
                navbarCollapse.classList.remove("show");
            }
        });
    });

    // Scroll animations for Chow and Burgarage sections
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
