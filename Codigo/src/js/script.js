let imagens=[
    'src/assets/fotopromo 1.png',
    'src/assets/fotopromo 2.jpg',
    'src/assets/fotopromo 3.jpg',
    'src/assets/fotopromo 4.jpg'
]

let index =0;
let time =3000;

function slideShow(){
  document.getElementById("imagens").src=imagens[index];
  index++;
  if(index == imagens.length){ index =0}
  setTimeout("slideShow()",time)
}
/*
const images = document.querySelectorAll('#carousel-inner img');
const carouselInner = document.getElementById('carousel-inner');
const title = document.getElementById('title');
const description = document.getElementById('description');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
let currentIndex = 0;

function updateDetails(index) {
  const currentImage = images[index];
  title.textContent = currentImage.dataset.title;
  description.textContent = currentImage.dataset.description;
  price.textContent = `R$ ${currentImage.dataset.price},00`;
  discount.textContent = `R$ ${currentImage.dataset.discount},00`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 400}px)`;
  updateDetails(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 400}px)`;
  updateDetails(currentIndex);
}

document.getElementById('next').addEventListener('click', showNext);
document.getElementById('prev').addEventListener('click', showPrev);
*/






let carosseis = document.getElementsByClassName('carossel-Container')

for(let i = 0; i < carosseis.length; i++){
  let carossel = carosseis[i]
  let btnBack = carossel.getElementsByClassName('BtnBack')[0]
  let btnNext = carossel.getElementsByClassName('BtnNext')[0]

  let itens = carossel.getElementsByClassName('item')
  let posicaoAnterior = 0
  let mover = posicaoAnterior + 100

  btnNext.addEventListener('click', ()=>{
    mover = posicaoAnterior + 100

    for(let c = 0; c < itens.length; c++ ){

    itens[c].style.right=  mover + '%'

    posicaoAnterior = mover}
  })

  btnBack.addEventListener('click', ()=>{
    mover = posicaoAnterior - 100

    for(let c = 0; c < itens.length; c++ ){

    itens[c].style.right=  mover + '%'

    posicaoAnterior = mover}

  })
}




// Inicializa os detalhes
updateDetails(currentIndex);
slideShow();
