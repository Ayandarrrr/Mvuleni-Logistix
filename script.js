// NAVBAR ACTIVE LINK

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }

  });

});

// CONTACT FORM

const form = document.querySelector(".contact-form");

if(form){

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for contacting Mvuleni Logistix. We will get back to you shortly.");

    form.reset();

  });

}

// FADE-IN ANIMATION ON SCROLL

const cards = document.querySelectorAll(".card, .service-card, .testimonial-card");

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

function revealCards() {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

}

window.addEventListener("scroll", revealCards);

// Run once on load in case cards are already in view
revealCards();

// NAVBAR SHRINK ON SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    navbar.style.padding = "12px 8%";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.12)";
  } else {
    navbar.style.padding = "20px 8%";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  }

});