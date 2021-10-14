let actionButton = document.querySelector('#b1');
let romanceButton = document.querySelector('#b22');
let comedyButton = document.querySelector('#b4');
let fantasyButton = document.querySelector('#b10');
let dramaButton = document.querySelector('#b8');
let adventureButton = document.querySelector('#b2');




actionButton.addEventListener('click', () => {
    firstApi(1, numberOfCardsToDisplay)

})
romanceButton.addEventListener('click', () => {
    firstApi(22, numberOfCardsToDisplay)

})
comedyButton.addEventListener('click', () => {
    firstApi(4, numberOfCardsToDisplay)

})
fantasyButton.addEventListener('click', () => {
    firstApi(10, numberOfCardsToDisplay)

})
dramaButton.addEventListener('click', () => {
    firstApi(8, numberOfCardsToDisplay)

})
adventureButton.addEventListener('click', () => {
    firstApi(2, numberOfCardsToDisplay)

})