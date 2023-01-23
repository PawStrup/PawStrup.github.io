const borderSlide = () => {
  const descLi = document.querySelectorAll(".border");
  const desc = document.querySelector(".desc");

  desc.addEventListener("mouseover", (e) => {
    descLi.forEach((li, index) => {
      li.style.animation = `border-slide 1s ease forwards ${index / 3 + 0.2}s`;
    });
  });
};

borderSlide();
