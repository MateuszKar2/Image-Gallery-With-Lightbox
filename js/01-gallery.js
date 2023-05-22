import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
// -------------------------
//Pobieram galerię za pomocą querySelector
//Wykorzystuję metodę .map, celem otrzymania przekształconej kopii tablicy
//Parametrami metody map. są: "preview"-mały obraz, "original"-duży obraz, "description"-opis obrazka.
//Implementuje gotowy szablon gotowych tagów HTML/CSS wprowadzając zmienne
//Łącze elementy tablicy w string za pomocą metody .join
//Za pomocą metody .insertAdjacentHTML("beforeend") dodaje ciąg znaków wewnątrz elementu po wszystkich dzieciach
//Stosuje detektor zdarzeń(nazwę zdarzenia/ f. wywołania zwrotnego
//Funkcja wywołania zwrotnego(z pierwszym argumentem-"event")
//Kasuje domyślne działanie przeglądarki za pomocą metody dla eventu tj.preventDefault();
//Stosuje warunek "if", i "event.target"
//Przy pomocy .nodeName sprawdzam typ elementu
//Wykorzystanie biblioteki "BASICLIGHTBOX" 
//Przypisuje swojej instancji(basicLightbox) zmienną
//Opiera się na prametrach- widoczny i zamknięty + modyfikuje zawartość(basicLightbox)
//Zamknięcie okna modalnego z klawiatury przycisk "Escape"
//Wykorzystanie metody .show
//-------------------------

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/></a></div>` ;})
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener('click', selectGalleryItem);

function selectGalleryItem(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
}
//Przerwa===================================>//




const markup = galleryItems.map(({ preview, original, description }) => {
     return `<div class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img
 class="gallery__image"
 src="${preview}"
 data-source="${original}"
 alt="${description}"/></a></div>`;})
     .join("");
  
 
 gallery.insertAdjacentHTML("beforeend", markup);


 gallery.addEventListener('click', selectGalleryItem);

 function selectGalleryItem(event) {
     event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
         return;
     }

     const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,

         {
             onShow: () => {
                 window.addEventListener('keydown', onKeydownEsc);
             },
             onClose: () => {
                 window.removeEventListener('keydown', onKeydownEsc);
             },
         },
     );

     const onKeydownEsc = event => {
        console.log(event.code);
        if (event.code === 'Escape') {
           instance.close();
        }
    };


   instance.show();
}
