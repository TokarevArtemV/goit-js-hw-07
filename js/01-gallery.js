import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const murkup = renderImg();

gallery.insertAdjacentHTML("afterbegin", murkup);
gallery.addEventListener("click", openModal);

function renderImg() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class=gallery__item><a class="gallery__link" href="${original}"><img class=gallery__image src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    })
    .join("");
}

function openModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const urlImg = event.target.dataset.source;

  const imgGallary = basicLightbox.create(`<img src="${urlImg}">`, {
    onShow: (img) => {
      window.onkeydown = (evt) => {
        if (evt.code === "Escape") {
          img.close();
        }
      };
    },
  });

  imgGallary.show();
}