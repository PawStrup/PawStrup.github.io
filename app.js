const header = document.querySelector('header');

header.innerHTML=`         
<div class="contact">
    <ul class>
        <li>
            <i class="fa-regular fa-envelope"></i>
            <span>
                sales@gluetraps.eu
            </span>
        </li>
        <li>
            <i class="fa-solid fa-phone"></i>
            <span>
                +48 666 388 413
            </span>
        </li>
    </ul>
</div>

<nav>
    <a class="logo" href="index.html">
        <img src="img/logoweb2.png" alt="Logo">
    </a>
    <div>
        <i class="fa-solid fa-bars menu-shortcut remove"></i>
    </div>
    <div class="menu-box">
        <div class="menu visible">
            <ul>
                <li class="nav-home"><a href="index.html"><span>Home</span></a></li>
                <li class="nav-glueboards"><a href="glueboards.html">Glue boards</a></li>
                <li class="nav-uva"><a href="uv.html">UVA light bulbs</a></li>
                <li class="nav-about"><a href="about.html">About us</a></li>
                <li class="nav-contact"><a href="contact.html">Contact us</a></li>
            </ul>
        </div>
    </div>
</nav>`
