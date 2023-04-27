// ANIMATION SCROLL

const target = document.querySelectorAll("[data-animated]");

function animation() {
  const animationClass = "animate";
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    }
  });
}

if (target.length) {
  window.addEventListener("scroll", () => {
    animation();
  });
}

// OPEN MENU MOBILE

function menuMobile() {
  const nav = document.querySelector(".nav-bar");
  nav.classList.toggle("active");

  const mobileOpen = document.querySelector('.open');
  mobileOpen.classList.toggle('close-button');

  const mobileClose = document.querySelector('.closed');
  mobileClose.classList.toggle('open-button');
}