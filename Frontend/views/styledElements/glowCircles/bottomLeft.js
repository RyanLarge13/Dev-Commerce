export const scaleBottomLeft = () => {
  const circle = document.querySelector(".bottom-left-purple");
  const height = 350;
  const width = 350;
  const scrollY = Math.floor(window.scrollY);
  circle.style.height = `${height - scrollY / 6}px`;
  circle.style.width = `${width - scrollY / 6}px`;
};

window.addEventListener("scroll", scaleBottomLeft);
