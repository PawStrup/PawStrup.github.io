const shortcut = document.querySelector('.menu-shortcut');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul')
const body = document.querySelector('body')

console.log(nav);
const mediaQuery = window.matchMedia('(max-width: 660px)')

if(mediaQuery.matches){
    shortcut.classList.remove('remove');
}

shortcut.addEventListener('click', e =>{
    console.log(e);
    if(menu.classList.contains('visible')){
        menu.classList.remove('visible');
    }
})


nav.addEventListener('mouseleave', e =>{
    console.log(e);

     menu.classList.add('visible');
})

body.addEventListener('scroll', e => {

        menu.classList.add('visible');

})