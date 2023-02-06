const about = document.querySelector(".about-desc");
const border = document.querySelectorAll(".border");

about.addEventListener("mouseover", () => {
  border.forEach((li, index) => {
    li.style.animation = `border-slide 1s ease forwards ${index / 3 + 0.2}s`;
  });
});
