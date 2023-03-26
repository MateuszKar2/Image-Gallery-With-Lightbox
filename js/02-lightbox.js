import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const  markup = createItemsMarkup(galleryItems);

gallery.insertAdjacentElement("beforeend", markup);

function createItemsMarkup(item) {
    return galleryItems
    .map(({ preview, original, description}) => {
        
    })
}