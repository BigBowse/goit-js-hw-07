import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalleryItemsCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
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
}

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsCardsMarkup(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function onGalleryClick(e) {
    const isGalleryItem = e.target.classList.contains('.gallery__image');
    if(!isGalleryItem) {
        return;
    }


}

gallery.addEventListener('click', onGalleryClick);


