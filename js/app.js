let body = document.querySelector("body");
let showBar = () => {
  let sideBar = document.getElementById("sideBar");
  let overlay = document.getElementById("overlay");
  sideBar.classList.remove("hide-it");
  overlay.classList.remove("hide-it");
  sideBar.classList.add("transform");
  overlay.classList.add("transform-overlay");
  sideBar.classList.remove("transform-down");
  overlay.classList.remove("transform-overlay-down");
  body.style.overflow = "hidden";
};
let closeBar = () => {
  let sideBar = document.getElementById("sideBar");
  let overlay = document.getElementById("overlay");

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
