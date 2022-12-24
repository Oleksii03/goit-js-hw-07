import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = galleryItems;
const divGallery = document.querySelector('div.gallery');


const markup = gallery.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`
}).join('');

divGallery.insertAdjacentHTML('beforeend', markup)

divGallery.addEventListener('click', urlImage);

function urlImage(e) {
  e.preventDefault();
  const url = e.target.dataset.source;
  if (!url) return;
  console.log(url);
  const instance = basicLightbox.create(`<img src="${url}">`);
  instance.show();
}
