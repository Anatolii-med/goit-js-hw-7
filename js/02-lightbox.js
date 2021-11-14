import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryItemMarkup = function ({ preview, original, description }) {
  return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} title=${description}"/>
</a>`;
};

const galleryItem = galleryItems.map(createGalleryItemMarkup).join("");
galleryEl.insertAdjacentHTML("afterbegin", galleryItem);

let gallery = new SimpleLightbox(".gallery a");

const onGalleryItemClick = function (e) {
  e.preventDefault();
  gallery.options.captionType = "title";
  gallery.options.captionDelay = 250;
};

galleryEl.addEventListener("click", onGalleryItemClick);
