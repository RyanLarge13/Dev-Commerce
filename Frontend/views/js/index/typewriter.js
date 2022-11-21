let interval = 0;
const delay = 50;
const elem = document.querySelector(".type-writer");
const text =
  "My name is Ryan Large, I am a fullstack web developer. My strengths lie in the MERN stack. Be sure to view my best work using these languages and frameworks.";

const type = () => {
  if (interval < text.length) {
    elem.innerHTML += text.charAt(interval);
    interval++;
    let recursion = setTimeout(type, delay);
    elem.addEventListener("click", () => {
      clearTimeout(recursion);
      return (elem.innerHTML = text);
    });
  }
};

window.addEventListener("DOMContentLoaded", type);
