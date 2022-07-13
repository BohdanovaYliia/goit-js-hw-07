import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryElements = createGalleryElements(galleryItems);

galleryContainer.innerHTML = galleryElements;

galleryContainer.addEventListener('click', onGalleryElementClick);

function createGalleryElements(items) {
    return items.map(({ preview, original, description }) => {
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
        </div>
        `;
     }).join('');

}

function onGalleryElementClick(event) {
    event.preventDefault();

    const isImgElement = event.target.classList.contains('gallery__image');

    if (!isImgElement) {
        return;
    };

    const largeImageUrl = event.target.dataset.source;
    const description = event.target.alt;

    createAndShowModal(largeImageUrl, description); 
}

function createAndShowModal(imageUrl, imageDescription) {
    const instance = basicLightbox.create(`
        <img src="${imageUrl}" alt="${imageDescription}"/>
    `, {
        onShow: () =>
        {
            window.addEventListener('keydown', onEscKeyPress);
        },

        onClose: () => { 
            window.removeEventListener('keydown', onEscKeyPress);
        },
    });

    instance.show(); 

    function onEscKeyPress(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        };
    }
}





