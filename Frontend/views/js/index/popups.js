export const showLogin = () => {
  const popup = document.querySelector(".popup");
  popup.classList.add(".show");
};

window.addEventListener("DOMContentLoaded", showLogin);
