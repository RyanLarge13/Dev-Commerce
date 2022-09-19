let interval = 0;
const delay = 50;
const elem = document.querySelector(".type-writer");
const text =
  "My name is Ryan Large, I am a fullstack web developer with a strong understanding of html, css & JavaScript. My strengths lie in the MERN stack (M-ongoDB, E-press, R-eact, N-ode.js). The knowledge in these frameworks, libraries & programming languages is a powerful and extensive tool to have in your developing arsenal. Be sure to view my best work using these languages.";

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
