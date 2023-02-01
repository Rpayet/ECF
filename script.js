// Toggle NavBar Menu on Mobile

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

// Valider la commande 

let purchase = document.querySelector('#purchase');
let purchaseBtn = document.querySelector('#purchase-btn');

purchaseBtn.addEventListener('click', () => {

    let div = document.createElement('div');
    div.classList.add('purchase-valid');
    let paragraph = document.createElement('p');
    div.appendChild(paragraph);
    paragraph.innerHTML = "Votre commande a été prise en compte."
    purchase.innerHTML= '';
    purchase.appendChild(div)

})



