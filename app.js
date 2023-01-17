const header = document.querySelector("header");

header.innerHTML = `
<div class="contact">
<ul class>
  <li>
    <i class="fa-regular fa-envelope"></i>
    <span> sales@gluetraps.eu </span>
  </li>
  <li>
    <i class="fa-solid fa-phone"></i>
    <span> +48 666 388 413 </span>
  </li>
</ul>
</div>

<nav>
<a class="logo" href="index.html">
  <img src="img/logoweb2.png" alt="Logo" />
</a>
<div class="menu-box">
  <ul class="nav-links">
    <li class="nav-home">
      <a href="index.html"><span>Home</span></a>
    </li>
    <li class="nav-glueboards">
      <a href="glueboards.html">Glue boards</a>
    </li>
    <li class="nav-uva">
      <a href="uv.html">UVA light bulbs</a>
    </li>
    <li class="nav-about">
      <a href="about.html">About us</a>
    </li>
    <li class="nav-contact">
      <a href="contact.html">Contact us</a>
    </li>
  </ul>
</div>
<div class="burger">
  <div class="bar">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</div>
</nav>`;

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu-box");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("cross-out");
  });
};

navSlide();
