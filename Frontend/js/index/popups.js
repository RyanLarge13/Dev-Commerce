export const showLogin = () => {
  const popup = document.querySelector(".popup");
  const text = popup.querySelector("p");
  popup.classList.add("show");
  text.innerText = "Login here!";
  setTimeout(() => {
  popup.style.transform = "scale(1)";
  	
  }, 250)
  setTimeout(() => {
    closePopup(popup);
  }, 3500);
  window.addEventListener("scroll", (e) => {
    closePopup(popup);
  });
};

const closePopup = (popup) => {
  popup.style.transform = "scale(0)";
  setTimeout(() => {
    popup.style.display = "none";
    window.removeEventListener("scroll", closePopup);
  }, 301);
};
