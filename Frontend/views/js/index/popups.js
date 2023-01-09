export const showLogin = () => {
  const popup = document.querySelector(".popup");
  const text = popup.querySelector("p");
  popup.classList.add("show");
  text.innerText = "Login here!";
  setTimeout(() => {
    popup.style.transform = "scale(1)";
  }, 1);
  setTimeout(() => {
    popup.style.transform = "scale(0)";
  }, 3000);
  setTimeout(() => {
    popup.style.display = "none";
  }, 3300);
};

// window.addEventListener("DOMContentLoaded", showLogin);
// showLogin();
