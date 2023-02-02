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

// Video Youtube Integration

let videoInt = document.querySelector('#purchase-aside');
let chiefBtn = document.querySelector('#chief-btn');

chiefBtn.addEventListener('click', () => {
    videoInt.classList.remove('img-design');
    videoInt.innerHTML = '<iframe width="720" height="405" src="https://www.youtube.com/embed/9l1glIKMtqE"></iframe>';
});

// Année de service dynamique onClick

let yearFill = document.querySelector('#fidelity-year');
let yearBtn = document.querySelector('#year-btn');
let year = 5;
yearFill.innerHTML= `depuis ${year} ans.`;

yearBtn.addEventListener('click', () => {
    year += 1;
    yearFill.innerHTML= `depuis ${year} ans.`;
});

// Chiffre aléatoire de productivité 

let commandValue = document.querySelector('.command-value');
let customerValue = document.querySelector('.customer-value');
let chiefValue = document.querySelector('.chief-value');
let randomizer = document.querySelector('#randomizer');

let x = 0;

let randomNumber = () => {
  return Math.floor(Math.random() * (99999 - 9 + 1) + 9);
}

randomizer.addEventListener('click', () => {
    commandValue.innerHTML = `${x = randomNumber()}+`;
    customerValue.innerHTML = `${x = randomNumber()}+`;
    chiefValue.innerHTML = `${x = randomNumber()}+`;
});


// 




