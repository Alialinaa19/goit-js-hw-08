// Add imports above this line
import { galleryItems } from './gallery-items';
// @ts-ignore
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

function createLi(array) {
    return array.reduce((acc, item) => acc + `<a class="gallery__item" href="${item.original}"><img title="${item.description}" src="${item.preview}" alt = "${item.description}" class="gallery__image"/></a>`, "")
}

const result = createLi(galleryItems);

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", result);
console.log(list)


// const lightbox = new SimpleLightbox('.gallery a');
// new SimpleLightbox('.gallery a', {captionDelay: 250});
// gallery.on('show.simplelightbox', function () {
// });
new SimpleLightbox('.gallery a', {
    captionDelay: 250
})