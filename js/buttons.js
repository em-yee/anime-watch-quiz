let actionButton = document.querySelector('#b1');
let romanceButton = document.querySelector('#b22');
let comedyButton = document.querySelector('#b4');
let fantasyButton = document.querySelector('#b10');
let dramaButton = document.querySelector('#b8');
let adventureButton = document.querySelector('#b2');

numberOfCardsToDisplay = 3;

actionButton.addEventListener('click', () => {
    firstApi(1, 6)
})
romanceButton.addEventListener('click', () => {
    firstApi(22, 6)
})
comedyButton.addEventListener('click', () => {
    firstApi(4, 6)
})
fantasyButton.addEventListener('click', () => {
    firstApi(10, 6)
})
dramaButton.addEventListener('click', () => {
    firstApi(8, 6)
})
adventureButton.addEventListener('click', () => {
    firstApi(2, 6)
})