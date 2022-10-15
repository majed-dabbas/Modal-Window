'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const showModal = function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener("click", showModal);

}


modal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);