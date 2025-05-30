// script.js

function scrollNav(distance) {
  const carousel = document.getElementById("navCarousel");
  carousel.scrollBy({ left: distance, behavior: "smooth" });
}
