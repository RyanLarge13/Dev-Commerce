const timeLine = document.querySelector(".time-line-container");
const timeLineItem = document.querySelectorAll(".dot");
const dotHolder = document.querySelector(".dots-holder");
const vh = window.innerHeight;
const body = document.querySelector("body");
let dotTop = 10;
let infoTop = 20;
let dateTop = 10;

const makeDots = () => {
  const dot = document.createElement("div");
  const inner = document.createElement("div");
  dot.className = "dot flex";
  inner.className = "inner-dot";
  dot.style.top = `${dotTop}%`;
  dot.appendChild(inner);
  if (dotTop === 200) clearInterval(callForDots);
  dotHolder.appendChild(dot);
};

const makeInfo = () => {
  const info = document.createElement("div");
  const inner = document.createElement("div");
  info.className = "info flex";
  inner.className = "info-inner";
  info.style.top = `${infoTop}%`;
  info.appendChild(inner);
  if (infoTop > 200) clearInterval(callForDatesandInfo);
  dotHolder.appendChild(info);
};

const makeDates = () => {
  const date = document.createElement("div");
  const inner = document.createElement("div");
  date.className = "date flex";
  inner.className = "date-inner";
  date.style.top = `${dateTop}%`;
  date.appendChild(inner);
  if (dateTop > 200) clearInterval(callForDatesandInfo);
  dotHolder.appendChild(date);
};

const callForDots = setInterval(() => {
  dotTop += 10;
  makeDots();
}, 1);

const callForDatesandInfo = setInterval(() => {
  dateTop += 20;
  infoTop += 20;
  makeInfo();
  makeDates();
}, 1);

const fade = () => {
  const allDots = document.querySelectorAll(".dot");
  fadeDates();
  fadeInfo();
  allDots.forEach((dot) => {
    const dotFromTop = (100 / dot.getBoundingClientRect().top) * 100;
    if (dotFromTop < 20 || dotFromTop > 35) dot.style.opacity = "0";
    else dot.style.opacity = "1";
  });
  checkForEnd();
};

const fadeInfo = () => {
  const allInfo = document.querySelectorAll(".info");
  allInfo.forEach((info) => {
    const infoFromTop = (100 / info.getBoundingClientRect().top) * 100;
    if (infoFromTop < 20 || infoFromTop > 35) info.style.opacity = "0";
    else info.style.opacity = "1";
  });
};

const fadeDates = () => {
  const allDates = document.querySelectorAll(".date");
  allDates.forEach((date) => {
    const dateFromTop = (100 / date.getBoundingClientRect().top) * 100;
    if (dateFromTop < 20 || dateFromTop > 35) date.style.opacity = "0";
    else date.style.opacity = "1";
  });
};

const enableScroll = () => {
  const sec1 = document.querySelector(".sec-1");
  const sec1Top = (100 / vh) * sec1.getBoundingClientRect().top;
  timeLine.pointerEvents = "none";
  if (sec1Top < 5 && sec1Top > -5) {
    dotHolder.style.overflowY = "auto";
    disableScroll("start");
    timeLine.style.pointerEvents = "auto";
  }
  if (sec1Top > 20 || sec1Top < -20) timeLine.style.pointerEvents = "none";
};

const checkForEnd = () => {
  const allDots = document.querySelectorAll(".dot");
  const bottom = allDots[allDots.length - 1];
  const percentage = (100 / vh) * bottom.getBoundingClientRect().bottom;
  window.removeEventListener("scroll", enableScroll);
  if (percentage < 150) {
    disableScroll("end");
  }
};

const disableScroll = (param) => {
  if (param === "end") {
    timeLine.style.pointerEvents = "none";
    window.scrollTo(0, vh * 2);
    setTimeout(() => {
      window.addEventListener("scroll", enableScroll);
    }, 2000);
  }
  if (param === "start") {
    window.scrollTo(0, vh);
  }
};

dotHolder.addEventListener("scroll", fade);
window.addEventListener("scroll", enableScroll);
