const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a");
const h1 = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();
const dayarr = ["일", "월", "화", "수", "목", "금", "토"];
console.log(date);
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  if (username !== "") {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
  } else {
    alert("이름을 입력해주세요!");
  }
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);

  h1.innerText = `안녕하세요. ${username}님, 좋은 하루보내세요.
  오늘은 ${year}년 ${month}월 ${date}일 ${dayarr[day]}요일입니다.  `;
  h1.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
