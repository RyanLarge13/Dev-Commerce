const email = localStorage.getItem("email") || null;

const login = async (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const data = {
    username: email,
    password: password,
  };
  await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      window.location = "/"
    })
    .catch((err) => console.log(err));
};

document.getElementById("email").value = email;

document.querySelector("form").addEventListener("submit", (e) => login(e));
