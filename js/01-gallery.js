import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems
    .map(({ original, preview, description})  
