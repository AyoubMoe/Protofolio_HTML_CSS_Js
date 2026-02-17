function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const roles = [
  "Project Analyst",
  "Software Engineer",
  "Data Analyst",
  "Project Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (!isDeleting) {
    typedText.textContent = currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      setTimeout(() => isDeleting = true, 1500);
    }
  } else {
    typedText.textContent = currentRole.slice(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
