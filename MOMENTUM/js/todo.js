const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoList_btn = document.getElementById("btn__todo-list");
const manage = document.getElementById("manage__todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
  const deleteli = event.target.parentElement;
  deleteli.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteli.id));
  saveToDos();
}
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.id = "cancel-li";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
function showToDoList(event) {
  event.preventDefault();
  if (toDoList.classList.value !== "hidden" && toDos.length >= 1) {
    toDoList.classList.add("hidden");
  } else {
    toDoList.classList.remove("hidden");
  }
}
toDoList_btn.addEventListener("click", showToDoList);
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
