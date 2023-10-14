import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", openModal);

function renderImg() {
  const murkup = galleryItems.map(({ preview, original, description }) => {
    return `<li class=gallery__item><a class="gallery__link" href="${original}"><img class=gallery__image src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
  });

  gallery.insertAdjacentHTML("afterbegin", murkup.join(""));
}

function openModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const urlImg = galleryItems.find((elem) => {
    return elem.description === event.target.alt;
  }).original;

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

renderImg();
