// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


function createLi(array) {
    return array.reduce((acc, item) => acc + `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img src="${item.preview}" data-source= "${item.original}" alt = "${item.description}" class="gallery__image"/></a></div>`, "")
}

const result = createLi(galleryItems);

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", result);
console.log(list)

function onImgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
		return
	}
    console.log(e.target.classList.contains("gallery__image"))
    
    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    list.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
}

list.addEventListener("click", onImgClick)