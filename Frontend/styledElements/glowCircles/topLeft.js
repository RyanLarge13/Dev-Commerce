export const scaleTopLeft = () => {
  const circle = document.querySelector(".top-left-blue");
  const height = 300;
  const width = 300;
  const scrollY = Math.floor(window.scrollY);
  circle.style.height = `${height - scrollY / 2}px`;
  circle.style.width = `${width - scrollY / 2}px`;
};

window.addEventListener("scroll", scaleTopLeft);
