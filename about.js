const shuffle = document.querySelectorAll(".about-desc-2 li");

shuffle.forEach((li, index) => {
  li.style.animation = `shuffle 1s ${index / 2 + 1.5}s forwards`;
});
