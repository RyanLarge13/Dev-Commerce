import { openModal } from "../Login/login.js";

export const toggleNav = () => {
  const loginModal = document.querySelector(".login-container");
  const nav = document.querySelector("nav");
  const dropShadow = document.querySelector(".drop-shadow");
  const logo = document.querySelector(".logo");
  const spans = document.querySelectorAll(".nav-toggle span");
  const popup = document.querySelector(".popup");
  popup.classList.remove("show");

  if (loginModal.classList.contains("show")) {
    openModal();
  }

  dropShadow.removeEventListener("click", openModal);
  nav.classList.toggle("open");
  spans.forEach((span) => {
    span.classList.toggle("open");
  });
  dropShadow.classList.toggle("open");
  setTimeout(() => {
    logo.classList.toggle("open");
  }, 500);
  showItems();
  createEvent(dropShadow);
  if (!nav.classList.contains("open")) nav.scrollTo(0, 0);
};

const createEvent = (shadow) => {
  shadow.addEventListener("click", toggleNav);
};

const showItems = () => {
  const navItems = document.querySelectorAll("nav li");
  navItems.forEach((item) => {
    const navItemFromView = item.getBoundingClientRect().top;
    navItemFromView > 0 && navItemFromView < window.innerHeight
      ? item.classList.add("open")
      : item.classList.remove("open");
  });
};

const clearX = () => {
  const topHeading = document.querySelector(".top-heading");
  const navToggle = document.querySelector(".nav-toggle");
  const headingFromTop = topHeading.getBoundingClientRect().top;
  if (headingFromTop < 75) navToggle.style.opacity = "0";
  else navToggle.style.opacity = "1";
};

document.querySelector(".nav-toggle").addEventListener("click", toggleNav);
document.querySelector("nav").addEventListener("scroll", () => {
  clearX();
  showItems();
});
