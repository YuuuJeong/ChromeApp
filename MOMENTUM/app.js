const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a");
const h1 = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
  h1.innerText = `Hello ${username} to meet you  `;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

function handleLinkClick(event) {
  event.preventDefault();
}

link.addEventListener("click", handleLinkClick);
