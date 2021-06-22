const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const imageRef = document.querySelector(".lightbox__image");
const btnRef = document.querySelector('button[data-action="close-lightbox"]');

const createGallatyItem = galleryItems.map(
  ({ preview, original, description }) => {
    const liElem = document.createElement("li");
    const linkLiElem = document.createElement("a");
    linkLiElem.classList.add("gallery__link");
    linkLiElem.setAttribute("href", original);
    const imgLiElem = document.createElement("img");
    imgLiElem.classList.add("gallery__image");
    imgLiElem.setAttribute("src", preview);
    imgLiElem.setAttribute("data-source", original);
    imgLiElem.setAttribute("alt", description);
    liElem.append(linkLiElem);
    linkLiElem.append(imgLiElem);
    return liElem;
  }
);

galleryRef.append(...createGallatyItem);

galleryRef.addEventListener("click", onOpenModal);
function onOpenModal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  modalRef.classList.add("is-open");

  function updateAttr(src = "", alt = "") {
    imageRef.src = src;
    imageRef.alt = alt;
  }

  const t = e.target;

  updateAttr(t.dataset.source, t.alt);

  // console.log(imageRef.src);
  // imageRef.src = e.target.dataset.source;
  // imageRef.alt = e.target.alt;

  btnRef.addEventListener("click", closeOpenModal);

  function closeOpenModal(e) {
    modalRef.classList.remove("is-open");

    updateAttr();
    // console.log(imageRef.src);
  }
}
