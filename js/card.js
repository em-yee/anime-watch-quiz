//DOM CREATION
let bodyElement = document.body
let flipCardContainer = document.getElementById('flip-card-container');
function createCards (objectList){
    flipCardContainer.innerHTML = '';
    for (object of objectList){
        let flipCard = document.createElement('div')
        let flipCardInner = document.createElement('div')
        let flipCardBack = document.createElement('div')
        let flipCardFront = document.createElement('div')
        let imageContainer = document.createElement('div')
        let infoContainer = document.createElement('div')
        let imageElement = document.createElement('img')
        let headElement = document.createElement('h3')
        let pElement = document.createElement('p')
        let btnElement = document.createElement('button')
        let backText = document.createElement('div')
        let infoContainerText = document.createElement('div')

        flipCardFront.className = 'flip-card-front card-face'
        imageContainer.className = 'image-container'
        infoContainer.className = 'info-container fixed-bottom'
        infoContainerText.className = 'info-container-text'
        imageElement.className = 'image'
        headElement.className = 'heading'
        pElement.className = 'paragraph'
        btnElement.className = 'btn'
        flipCard.className = 'flip-card mx-5'
        flipCardInner.className = 'flip-card-inner'
        flipCardBack.className = 'flip-card-back card-face'
        backText.className = 'back-text'

        imageElement.src = object['image'];
        headElement.innerText = object['title'];
        pElement.innerText = `"${object['quote']}"`;
        backText.innerText = object['synopsis'];

        flipCardContainer.appendChild(flipCard);
        flipCardFront.append(imageContainer, infoContainer);
        imageContainer.appendChild(imageElement);
        infoContainer.append(infoContainerText)
        infoContainerText.append(headElement, pElement);
        flipCard.append(flipCardInner);
        flipCardInner.append(flipCardFront, flipCardBack);
        flipCardBack.append(backText)

        flipCardInner.addEventListener('click', ()=>{
            flipCardInner.classList.toggle('is-flipped')
        })
    }
}