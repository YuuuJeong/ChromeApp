const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  if (date.getSeconds() < 10) {
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`;
  } else {
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}

getClock();
setInterval(getClock, 1000);
