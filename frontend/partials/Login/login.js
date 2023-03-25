import { toggleNav } from "../Nav/nav.js";

export const openModal = (e) => {
  const loginModal = document.querySelector(".login-container");
  const dropShadow = document.querySelector(".drop-shadow");
  const loginBtn = document.querySelector(".login-toggle");
  const nav = document.querySelector("nav");
  const popup = document.querySelector(".popup");

  popup.classList.remove("show");
  loginModal.classList.toggle("show");
  dropShadow.classList.toggle("open");
  loginBtn.classList.toggle("clicked");
  dropShadow.removeEventListener("click", toggleNav);
  dropShadow.addEventListener("click", openModal);

  if (nav.classList.contains("open")) {
    toggleNav();
    openModal();
  }

  checkForUser();
};

const startLogin = (e, input) => {
  e.preventDefault();
  localStorage.setItem("email", input.value);
  window.location = "/login";
};

const checkForUser = () => {
  const input = document.querySelector(".login-container input");
  const email = localStorage.getItem("email");
  email ? (input.value = email) : (input.placeholder = "Email");
  document
    .querySelector(".login-email-form")
    .addEventListener("submit", (e) => startLogin(e, input));
};

document.querySelector(".login-toggle").addEventListener("click", openModal);
