import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const  markup = createItemsMarkup(galleryItems);

gallery.insertAdjacentElement("beforeend", markup);

function createItemsMarkup(item) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img  
    class="gallery__image"
    src="${preview}"
    alt="${description}"/></a></div>`;})
    .join(""); 
}

const lighbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 50,
});
