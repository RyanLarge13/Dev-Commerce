const revert = (elems) => {
  elems.forEach((elem) => {
    elem.style.transition = "250ms ease-in-out";
  });
};

const animate = () => {
  const cards = document.querySelectorAll(".head-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.transition = "750ms ease-in-out";
      card.style.transform = "translateX(0)";
    }, 200 * index);
  });
  cards[cards.length - 1].addEventListener("transitionend", () => {
    revert(cards);
  });
};

window.addEventListener("DOMContentLoaded", animate);
document.querySelector(".future-date").innerHTML = new Date().getFullYear() + 3;
