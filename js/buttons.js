let actionButton = document.querySelector('#b1');
let romanceButton = document.querySelector('#b22');
let comedyButton = document.querySelector('#b4');
let fantasyButton = document.querySelector('#b10');
let dramaButton = document.querySelector('#b8');
let adventureButton = document.querySelector('#b2');

let pages3 = document.querySelector('.pages3')
let pages6 = document.querySelector('.pages6')
let pages9 = document.querySelector('.pages9')
let pages12 = document.querySelector('.pages12')
let pages15 = document.querySelector('.pages15')
let pagesShowAll = document.querySelector('.pagesShowAll')
let lastChosenGenre = 0
let isChosen = false

// GENRE BUTTONS
actionButton.addEventListener('click', () => {
    firstApi(1, numberOfCardsToDisplay)
    isChosen = true
    lastChosenGenre = 1
})
romanceButton.addEventListener('click', () => {
    firstApi(22, numberOfCardsToDisplay)
    isChosen = true
    lastChosenGenre = 22
})
comedyButton.addEventListener('click', () => {
    firstApi(4, numberOfCardsToDisplay)
    isChosen = true
    lastChosenGenre = 4
})
fantasyButton.addEventListener('click', () => {
    firstApi(10, numberOfCardsToDisplay)
    isChosen = true
    lastChosenGenre = 10
})
dramaButton.addEventListener('click', () => {
    firstApi(8, numberOfCardsToDisplay)
    isChosen = true
    lastChosenGenre = 8
})
adventureButton.addEventListener('click', () => {
    firstApi(2, numberOfCardsToDisplay)
    isChosen = true
    lastChosenGenre = 2
})


//DROPDOWN MENU BUTTONS
pages3.addEventListener('click', (e) => {
    numberOfCardsToDisplay = 3
    if(isChosen == true){
        firstApi(lastChosenGenre, 3)
    }
    pages3.setAttribute('style', 'background-color: grey')    
    pages6.setAttribute('style', pages6.getAttribute('style') + 'background-color: white')    
    pages9.setAttribute('style', pages9.getAttribute('style') + 'background-color: white')    
    pages12.setAttribute('style', pages12.getAttribute('style') + 'background-color: white')    
    pages15.setAttribute('style', pages15.getAttribute('style') + 'background-color: white')
    pagesShowAll.setAttribute('style', pagesShowAll.getAttribute('style') + 'background-color: white')
    
})
pages6.addEventListener('click', () => {
    numberOfCardsToDisplay = 6 
    if(isChosen == true){
        firstApi(lastChosenGenre, 6)
    }
    pages3.setAttribute('style', pages3.getAttribute('style') + 'background-color: white')    
    pages6.setAttribute('style', 'background-color: grey')    
    pages9.setAttribute('style', pages9.getAttribute('style') + 'background-color: white')    
    pages12.setAttribute('style',pages12.getAttribute('style') + 'background-color: white')    
    pages15.setAttribute('style',pages15.getAttribute('style') + 'background-color: white')
    pagesShowAll.setAttribute('style', pagesShowAll.getAttribute('style') + 'background-color: white')
})
pages9.addEventListener('click', () => {
    numberOfCardsToDisplay = 9
    if(isChosen == true){
        firstApi(lastChosenGenre, 9)
    }
    pages3.setAttribute('style', pages3.getAttribute('style') + 'background-color: white')    
    pages6.setAttribute('style', pages6.getAttribute('style') + 'background-color: white')    
    pages9.setAttribute('style', 'background-color: grey')    
    pages12.setAttribute('style', pages12.getAttribute('style') + 'background-color: white')    
    pages15.setAttribute('style', pages15.getAttribute('style') + 'background-color: white')
    pagesShowAll.setAttribute('style', pagesShowAll.getAttribute('style') + 'background-color: white')
})
pages12.addEventListener('click', () => {
    numberOfCardsToDisplay = 12
    if(isChosen == true){
        firstApi(lastChosenGenre, 12)
    }
    pages3.setAttribute('style', pages3.getAttribute('style') + 'background-color: white')    
    pages6.setAttribute('style', pages6.getAttribute('style') + 'background-color: white')    
    pages9.setAttribute('style', pages9.getAttribute('style') + 'background-color: white')    
    pages12.setAttribute('style', 'background-color: grey')    
    pages15.setAttribute('style', pages15.getAttribute('style') + 'background-color: white')
    pagesShowAll.setAttribute('style', pagesShowAll.getAttribute('style') + 'background-color: white')
})
pages15.addEventListener('click', () => {
    numberOfCardsToDisplay = 15
    if(isChosen == true){
        firstApi(lastChosenGenre, 15)
    }
    pages3.setAttribute('style', pages3.getAttribute('style') + 'background-color: white')    
    pages6.setAttribute('style', pages6.getAttribute('style') + 'background-color: white')    
    pages9.setAttribute('style', pages9.getAttribute('style') + 'background-color: white')    
    pages12.setAttribute('style', pages12.getAttribute('style') + 'background-color: white')    
    pages15.setAttribute('style', 'background-color: grey')
    pagesShowAll.setAttribute('style', pagesShowAll.getAttribute('style') + 'background-color: white')
})
pagesShowAll.addEventListener('click', () => {
    numberOfCardsToDisplay = 100
    if(isChosen == true){
        firstApi(lastChosenGenre, 100)
    }
    pages3.setAttribute('style', pages3.getAttribute('style') + 'background-color: white')    
    pages6.setAttribute('style', pages6.getAttribute('style') + 'background-color: white')    
    pages9.setAttribute('style', pages9.getAttribute('style') + 'background-color: white')    
    pages12.setAttribute('style', pages12.getAttribute('style') + 'background-color: white')    
    pages15.setAttribute('style', pages15.getAttribute('style') + 'background-color: white')
    pagesShowAll.setAttribute('style', 'background-color: grey')
})
