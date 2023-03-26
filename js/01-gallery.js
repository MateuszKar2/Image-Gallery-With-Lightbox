// function createItemsMarkup(item) {
// return galleryItems
// .map(({ preview, original, description }) => {
//     return `<div class="gallery__item">
//     <a class="gallery__link" href=${original}">
//     <img 
//     class="gallery__image"
//     src=${preview}"
//     data-source="${original}"
//     alt="${description}"/><a/></div>`;})
//     .join("");
// }


import { galleryItems } from './gallery-items.js';
 

const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description}) => {
    return `<div class="gallery_item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"/></a></div>`;})
    .join("");

galleryContainer.insertAdjacentHTML("beforeend", markup);

galleryContainer.addEventListener('click',selectGalleryItem);

function selectGalleryItem(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'ING') {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${event.target.dateset.source}" width="800" heigth="600">`,
        {
            onShow: () => {
                window.addEventListener(`keydown`, onKeydownEsc);
            },
            onClose: () => {
                window.removeEventListener('keydown', onKeydownEsc);
            },
        },


    );
}const onKeydownEsc= event => {
    console.log(event.code);
    if (event.code === 'Escape') {
        instance.close();
    }
};
instance.show();
