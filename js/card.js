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

//APPLYING CLASS NAMES TO DOM ELEMENTS/CONTAINERS
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

//Applying source (api needed)
imageElement.src = 'https://cdn.myanimelist.net/s/common/uploaded_files/1482965945-3d9561fa5a014da11e0dd3b2f148b1b0.jpeg' //`${anime[x].image_url}` 

btnElement.setAttribute('href', '#')

//APPLYING TEXT TO CARD
headElement.innerText = 'TITLE' //`${anime[x].name}`
pElement.innerText = '"CLEVER QUOTE"' //`${quoteapi[x].quote}`
btnElement.innerText = 'More info'
flipCardBack.innerText = 'EXAMPLE SYNOPSIS Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad repudiandae commodi sunt eligendi fugit totam ex reiciendis atque iure, nostrum aliquam, odit nemo accusamus culpa quidem accusantium eius autem.' //`${anime.synopsis}`

// card flipping/button functionality
flipCardInner.addEventListener('click', ()=>{
    flipCardInner.classList.toggle('is-flipped')
})

//APPENDING CARD TOGETHER
bodyElement.appendChild(flipCard); //

flipCardFront.append(imageContainer, infoContainer);
imageContainer.appendChild(imageElement)
infoContainer.append(headElement, pElement, btnElement);
flipCard.append(flipCardInner)
flipCardInner.append(flipCardFront, flipCardBack)










