// <div class="card" style="width: 18rem;">
//   <div>       
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//   </div>
// </div>

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


//APPLYING CLASS NAMES TO DOM ELEMENTS/CONTAINERS


//Applying source (api needed)


//APPLYING TEXT TO CARD


// card flipping/button functionality


//APPENDING CARD TOGETHER












