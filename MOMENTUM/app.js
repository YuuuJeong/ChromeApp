const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a");
const h1 = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  h1.innerText = `Hello ${username} to meet you  `;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  h1.innerText = `Hello ${username} to meet you  `;
  h1.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
