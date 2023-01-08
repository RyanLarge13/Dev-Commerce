export const showLogin = () => {
  const popup = document.querySelector(".popup");
  const text = popup.querySelector("p");
  popup.classList.add("show");
  text.innerText = "Login here!";
};

// window.addEventListener("DOMContentLoaded", showLogin);
// showLogin();
