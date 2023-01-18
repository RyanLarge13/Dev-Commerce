export const showLogin = () => {
  const popup = document.querySelector(".popup");
  const text = popup.querySelector("p");
  popup.classList.add("show");
  text.innerText = "Login here!";
  setTimeout(() => {
    popup.style.transform = "scale(1)";
    window.addEventListener("scroll", (e) => {
      closePopup(popup);
    });
  }, 500);
};

const closePopup = (popup) => {
  popup.style.transform = "scale(0)";
  setTimeout(() => {
    popup.style.display = "none";
    window.removeEventListener("scroll", closePopup)
  }, 301);
};
