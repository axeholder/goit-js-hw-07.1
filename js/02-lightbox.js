import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
listEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<li class="gallery__item"> 
        <a class = "gallery__link" 
            href = "${item.original}">
        <img class = "gallery__image"
            src = "${item.preview}"
            alt = "${item.description}" />
        </a> 
        </li>`;
    })
    .join("");
}

listEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }

  //   console.log(event.currentTarget);

  const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
