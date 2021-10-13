//DOM CREATION
let flipCardContainer = document.getElementById('flip-card-container');
function createCards (objectList){
    for (object of objectList){
        let flipCard = document.createElement('div')
        let flipCardInner = document.createElement('div')
        let flipCardBack = document.createElement('div')
        let flipCardFront = document.createElement('div')
        let imageContainer = document.createElement('div')
        let infoContainer = document.createElement('div')
        let imageElement = document.createElement('img')
        let headElement = document.createElement('h5')
        let pElement = document.createElement('p')
        let btnElement = document.createElement('button')

        flipCardFront.className = 'flip-card-front card-face'
        imageContainer.className = 'image-container'
        infoContainer.className = 'info-container'
        imageElement.className = 'image'
        headElement.className = 'heading'
        pElement.className = 'paragraph'
        btnElement.className = 'btn'
        flipCard.className = 'flip-card'
        flipCardInner.className = 'flip-card-inner'
        flipCardBack.className = 'flip-card-back card-face'

        imageElement.src = object['image'];

        headElement.innerText = object['title'];
        pElement.innerText = object['quote'];
        flipCardBack.innerText = object['synopsis'];

        flipCardContainer.appendChild(flipCard);
        flipCardFront.append(imageContainer, infoContainer);
        imageContainer.appendChild(imageElement);
        infoContainer.append(headElement, pElement);
        flipCard.append(flipCardInner);
        flipCardInner.append(flipCardFront, flipCardBack);

        flipCardInner.addEventListener('click', ()=>{
            flipCardInner.classList.toggle('is-flipped')
        })
    }
}

let flipCard = document.createElement('div');
let flipCardInner = document.createElement('div');
let flipCardBack = document.createElement('div');
let flipCardFront = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headElement = document.createElement('h2');
let pElement = document.createElement('p');

//APPLYING CLASS NAMES TO DOM ELEMENTS/CONTAINERS
flipCardFront.className = 'flip-card-front card-face';
imageContainer.className = 'image-container';
infoContainer.className = 'info-container';
imageElement.className = 'image';
headElement.className = 'card-title';
pElement.className = 'paragraph || text';
flipCard.className = 'flip-card';
flipCardInner.className = 'flip-card-inner';
flipCardBack.className = 'flip-card-back card-face';

//APPLYING API IMAGE TO CARD
imageElement.src = 'https://cdn.myanimelist.net/s/common/uploaded_files/1482965945-3d9561fa5a014da11e0dd3b2f148b1b0.jpeg'; //`${anime[x].image_url}`

//APPLYING API INFO TEXT TO CARD
headElement.innerText = 'TITLE'; //`${anime[x].name}`
pElement.innerText = '"CLEVER QUOTE"'; //`${quoteapi[x].quote}`
flipCardBack.innerText = 'EXAMPLE SYNOPSIS Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad repudiandae commodi sunt eligendi fugit totam ex reiciendis atque iure, nostrum aliquam, odit nemo accusamus culpa quidem accusantium eius autem.'; //`${anime.synopsis}`

// card flipping/button functionality toggle
flipCardInner.addEventListener('click', () => {
  flipCardInner.classList.toggle('is-flipped');
});

//APPENDING CARD TOGETHER
flipCardContainer.appendChild(flipCard); //
flipCardFront.append(imageContainer, infoContainer);
imageContainer.appendChild(imageElement);
infoContainer.append(headElement, pElement);
flipCard.append(flipCardInner);
flipCardInner.append(flipCardFront, flipCardBack);




