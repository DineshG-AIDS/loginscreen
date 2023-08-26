const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const email = document.getElementById("email1");

registerButton.onclick = function() {
  container.className = "active";
};
loginButton.onclick = function() {
  container.className = "close";
};
