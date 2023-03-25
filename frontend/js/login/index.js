const email = localStorage.getItem("email") || null;

const login = async (e) => {
  const password = document.getElementById("password").value;
  e.preventDefault();
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
      window.location = `/profile/${data.user}`;
    })
    .catch((err) => console.log(err));
};

document.getElementById("username").value = email;

document.querySelector("form").addEventListener("submit", (e) => login(e));