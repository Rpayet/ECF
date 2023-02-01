//Toggle NavBar Menu on Mobile

let navDisplay = document.querySelector('#navDisplay');
let navClose = document.querySelector('#navClose');
let navBar = document.querySelector('#navBar');

navDisplay.addEventListener('click', () => {
    navBar.classList.toggle('hide');
    navBar.classList.toggle('show');
});

navClose.addEventListener('click', () => {
    navBar.classList.toggle('hide');
    navBar.classList.toggle('show');
});

