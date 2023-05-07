import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems.map((item) => {
    return `<li class="gallery__item"> 
        <a class = "gallery__link" 
            href = "large-image.jpg">
        <img class = "gallery__image"
            src = "small-image.jpg"
            data - source = "large-image.jpg"
            alt = "Image description" />
        </a>{" "} 
        </li>`;
  });
  console.log(markup);
}
console.log(createGalleryMarkup(galleryItems));
