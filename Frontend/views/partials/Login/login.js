export const openModal = (e) => {
  const loginModal = document.querySelector(".login-container");
  const dropShadow = document.querySelector(".drop-shadow");
  const loginBtn = document.querySelector(".login-toggle");

  loginModal.classList.toggle("show");
  dropShadow.classList.toggle("open");
  loginBtn.classList.toggle("clicked");

  checkForUser();
};

const checkForUser = () => {
  const input = document.querySelector(".login-container input");
  const email = localStorage.getItem("email");
  email ? (input.value = email) : (input.placeholder = "Email");
};

document.querySelector(".login-toggle").addEventListener("click", openModal);
