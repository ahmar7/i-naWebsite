let body = document.querySelector("body");
let iconDesk = document.getElementById("icon-desk");
let navHide = document.getElementById("navHide");
let showBar = () => {
  let sideBar = document.getElementById("sideBar");
  let overlay = document.getElementById("overlay");

  sideBar.classList.remove("hide-it");
  overlay.classList.remove("hide-it");
  iconDesk.classList.add("icon-desk");
  navHide.classList.remove("icon-desk");
  sideBar.classList.add("transform");
  overlay.classList.add("transform-overlay");
  sideBar.classList.remove("transform-down");
  overlay.classList.remove("transform-overlay-down");
  body.style.overflow = "hidden";
};
let closeBar = () => {
  let sideBar = document.getElementById("sideBar");
  let overlay = document.getElementById("overlay");
  iconDesk.classList.remove("icon-desk");
  navHide.classList.add("icon-desk");
  sideBar.classList.remove("transform");
  overlay.classList.remove("transform-overlay");
  sideBar.classList.add("transform-down");
  overlay.classList.add("transform-overlay-down");
  setTimeout(() => {
    sideBar.classList.add("hide-it");
    overlay.classList.add("hide-it");
    body.style.overflow = "auto";
  }, 500);
};

let showResumeModal = () => {
  let resumeModal = document.getElementById("resumeModal");
  resumeModal.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let closeModal = () => {
  let resumeModal = document.getElementById("resumeModal");

  resumeModal.classList.add("hide-it");
  body.style.overflow = "auto";
};
let closeImg = () => {
  let imgModal = document.getElementById("imgModal");

  imgModal.classList.add("hide-it");
  body.style.overflow = "auto";
};
let closeResearch = () => {
  let researchModal = document.getElementById("researchModal");

  researchModal.classList.add("hide-it");
  body.style.overflow = "auto";
};

let openImg = () => {
  let imgModal = document.getElementById("imgModal");
  imgModal.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let openResearch = () => {
  let researchModal = document.getElementById("researchModal");
  researchModal.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let BookOneOpen = () => {
  let bookOne = document.getElementById("bookOne");
  bookOne.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let CloseBookOne = () => {
  let bookOne = document.getElementById("bookOne");
  bookOne.classList.add("hide-it");
  body.style.overflow = "auto";
};
let BookTwoOpen = () => {
  let bookTwo = document.getElementById("bookTwo");
  bookTwo.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let CloseBookTwo = () => {
  let bookTwo = document.getElementById("bookTwo");
  bookTwo.classList.add("hide-it");
  body.style.overflow = "auto";
};
let BookThreeOpen = () => {
  let bookThree = document.getElementById("bookThree");
  bookThree.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let CloseBookThree = () => {
  let bookThree = document.getElementById("bookThree");
  bookThree.classList.add("hide-it");
  body.style.overflow = "auto";
};
let BookFourOpen = () => {
  let BookFour = document.getElementById("bookFour");
  BookFour.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let CloseBookFour = () => {
  let BookFour = document.getElementById("bookFour");
  BookFour.classList.add("hide-it");
  body.style.overflow = "auto";
};
let BookFiveOpen = () => {
  let bookFive = document.getElementById("bookFive");
  bookFive.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let CloseBookFive = () => {
  let bookFive = document.getElementById("bookFive");
  bookFive.classList.add("hide-it");
  body.style.overflow = "auto";
};
let BookSixOpen = () => {
  let bookSix = document.getElementById("bookSix");
  bookSix.classList.remove("hide-it");
  body.style.overflow = "hidden";
};
let CloseBookSix = () => {
  let bookSix = document.getElementById("bookSix");
  bookSix.classList.add("hide-it");
  body.style.overflow = "auto";
};

// typing text animation script
$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: ["I'm an Associate Professor of Art."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
