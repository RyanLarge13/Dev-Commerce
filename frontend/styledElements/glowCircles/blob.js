export const moveBlob = () => {
  const blob = document.querySelector(".blob-container");
  const right = -25;
  const top = 50;
  const scrollY = Math.floor(window.scrollY);
  blob.style.top = `${top - scrollY / 15}%`;
  blob.style.right = `${right + scrollY / 30}%`;
};

window.addEventListener("scroll", moveBlob);
