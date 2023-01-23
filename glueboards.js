const scale = () => {
  const multiWrapper = document.querySelector(".multi-wrapper");
  const multiImg = document.querySelector(".multi-box-2 img");
  const dealWrapper = document.querySelector(".deal-wrapper");
  const dealImg = document.querySelector(".deal-box-2 img");
  const insectWrapper = document.querySelector(".insect-wrapper");
  const insectImg = document.querySelector(".insect-box-2 img");

  multiWrapper.addEventListener("mouseover", (e) => {
    console.log(e);
    multiImg.style.animation = `scale1 0.6s ease forwards`;
  });

  multiWrapper.addEventListener("mouseout", (e) => {
    console.log(e);
    multiImg.style.animation = `scale2 0.6s ease forwards`;
  });

  dealWrapper.addEventListener("mouseover", (e) => {
    console.log(e);
    dealImg.style.animation = `scale3 0.6s ease forwards`;
  });

  dealWrapper.addEventListener("mouseout", (e) => {
    console.log(e);
    dealImg.style.animation = `scale4 0.6s ease forwards`;
  });

  insectWrapper.addEventListener("mouseover", (e) => {
    console.log(e);
    insectImg.style.animation = `scale3 0.6s ease forwards`;
  });

  insectWrapper.addEventListener("mouseout", (e) => {
    console.log(e);
    insectImg.style.animation = `scale4 0.6s ease forwards`;
  });
};

scale();
