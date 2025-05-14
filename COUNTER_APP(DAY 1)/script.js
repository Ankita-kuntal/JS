let count = 0;

function increase() {
  count++;
  document.getElementById("count").textContent = count;
}

function decrease() {
  count--;
  document.getElementById("count").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("count").textContent = count;
}


document.querySelector('.plus').addEventListener('click', increase);
document.querySelector('.minus').addEventListener('click', decrease);
document.querySelector('.reset').addEventListener('click', reset);
