const type = document.getElementById("type-writer");
const terminalType = document.getElementById("terminal-typer");

const typewriter = new Typewriter(type, {
  loop: false,
  delay: 75,
});

const terminalTyper = new Typewriter(terminalType, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString("My name is <strong>Ryan Large</strong>, ")
  .pauseFor(750)
  .typeString("I am a fullstack Web Designer.")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong> Developer.. </strong>")
  .pauseFor(750)
  .typeString("My strengths lie in the MERN stack.")
  .pauseFor(300)
  .typeString(
    " Be sure to view my best work using these <strong>languages</strong> and <strong>frameworks.</strong>"
  )
  .start();

terminalTyper
  .pauseFor(250)
  .typeString("{ <br> ")
  .pauseFor(500)
  .typeString("<strong class='code-strong'>success ?")
  .pauseFor(1000)
  .typeString(" true : success;</strong><br>")
  .pauseFor(500)
  .typeString("}")
  .pauseFor(1500)
  .start();
