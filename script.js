// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// =========================
// RAIN EFFECT
// =========================

const rainContainer = document.getElementById("rain-container");

if (rainContainer) {

    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {

        const drop = document.createElement("span");

        drop.classList.add("raindrop");

        drop.style.left = `${Math.random() * 100}%`;

        drop.style.height = `${20 + Math.random() * 35}px`;

        drop.style.animationDuration = `${0.7 + Math.random() * 1.2}s`;

        drop.style.animationDelay = `${Math.random() * 2}s`;

        drop.style.opacity = `${0.15 + Math.random() * 0.45}`;

        rainContainer.appendChild(drop);
    }
}