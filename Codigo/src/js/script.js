let imagens=[
  'src/assets/fotopromo1.jpg',
  'src/assets/fotopromo2.jpg',
  'src/assets/fotopromo3.jpg',
  'src/assets/fotopromo4.jpg'
]

let index =0;
let time =3000;

function slideShow(){
document.getElementById("imagens").src=imagens[index];
index++;
if(index == imagens.length){ index =0}
setTimeout("slideShow()",time)
}

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

// Inicializa os detalhes
updateDetails(currentIndex);
slideShow();