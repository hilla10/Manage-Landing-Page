const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})


// function navToggle() {
//     menu.classList.toggle('active')
//     nav.classList.toggle('active')
// }

// menu.addEventListener('click', navToggle)


