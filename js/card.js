// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//DOM CREATION
let bodyElement = document.querySelector('body')

let cardElement = document.createElement('div')
let imageContainer = document.createElement('div')
let infoContainer = document.createElement('div')
let imageElement = document.createElement('img')
let headElement = document.createElement('h5')
let pElement = document.createElement('p')
let btnElement = document.createElement('button')

//APPLYING CLASS NAMES TO DOM ELEMENTS/CONTAINERS
cardElement.className = 'card'
imageContainer.className = 'image-container'
infoContainer.className = 'info-container d-flex align-items-center justify-content-center'
imageElement.className = 'image'
headElement.className = 'heading'
pElement.className = 'paragraph'
btnElement.className = 'btn'

//Applying source (api needed)
imageElement.src = 'https://cdn.myanimelist.net/s/common/uploaded_files/1482965945-3d9561fa5a014da11e0dd3b2f148b1b0.jpeg' //`${anime[x].image_url}` 

btnElement.setAttribute('href', '#')

//APPLYING TEXT TO CARD
headElement.innerText = '`${anime[x].name}`' //`${anime[x].name}`
pElement.innerText = '`${quoteapi[x].quote}`' //`${quoteapi[x].quote}`
btnElement.innerText = 'More info'

//APPENDING CARD TOGETHER
bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);

imageContainer.appendChild(imageElement)
infoContainer.append(headElement, pElement, btnElement);

















