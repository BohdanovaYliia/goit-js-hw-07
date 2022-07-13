import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryElements = createGalleryElements(galleryItems);

galleryContainer.innerHTML = galleryElements;

function createGalleryElements(items) {
    return items.map(({ preview, original, description }) => {
        return `  
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`;
     }).join('');

}

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
    gallery.defaultOptions.captionsData = "alt";
    gallery.defaultOptions.captionDelay = 250;
});

