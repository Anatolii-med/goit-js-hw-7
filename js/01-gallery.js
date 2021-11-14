import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
let urlGalleryItemOriginalImg;
let modalVar = "";

const createGalleryItemMarkup = function ({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href=${preview}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
};

const galleryItem = galleryItems.map(createGalleryItemMarkup).join("");
galleryEl.insertAdjacentHTML("afterbegin", galleryItem);

const onGalleryItemClick = function (e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  urlGalleryItemOriginalImg = e.target.dataset.source;
  const modalImg = basicLightbox.create(`
      <img src="${urlGalleryItemOriginalImg}" width="800" height="600">
  `);

  modalImg.show();

  //закрытие по Esc

  const escPress = function (e) {
    if (e.key !== "Escape") {
      console.log("escPress ~ e.key", e.key);
      return;
    }
    modalImg.close();
    galleryEl.removeEventListener("keydown", escPress);
  };

  galleryEl.addEventListener("keydown", escPress);
};

galleryEl.addEventListener("click", onGalleryItemClick);
