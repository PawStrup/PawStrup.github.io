const catalogueSlide = () => {
  catalogue = document.querySelector(".catalogue h4");

  document.addEventListener("scroll", (e) => {
    console.log(e);
    catalogue.style.animation = "slide2 1s 0.5s ease forwards";
  });
};

catalogueSlide();
