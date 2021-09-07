let inputTasks = document.getElementById("containerInputTasks");

let btnPlus = document.getElementById("btnPlus");

btnPlus.addEventListener("click", (c) => {
  turnOn();
});

let bntX = document.getElementById("close");

bntX.addEventListener("click", (c) => {
  turnOff();
});

function turnOn() {
  inputTasks.style.display = "flex";
  document.documentElement.style.overflow = "hidden";
}

function turnOff() {
  inputTasks.style.display = "none";
  document.documentElement.style.overflow = "auto";
}

let btnAddTask = document.getElementById("addTasks");

btnAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  let taskName = document.getElementById("taskName").value;
  let task = document.getElementById("Task").value;
  createTask(taskName, task);
  turnOff();
});

let counter = 0;

function createTask(taskName, task) {
  counter++;
  let containerCards = document.getElementById("containerTasks");
  let newTask = document.createElement("div");
  newTask.classList.add("cards");
  newTask.innerHTML =
    " <div class='containerContent'" +
    " idcard=" +
    counter +
    "><h2>" +
    taskName +
    "</h2><p>" +
    task +
    "</p></div><div class='containerButtons'><img src='/todolist/assets/trash.png'" +
    " idimage=" +
    counter +
    "></div>";
  containerCards.appendChild(newTask);
  showCounter(counter);
}

function showCounter(counter) {
  let showCounter = document.getElementById("numTasks");
  if (counter > 0) {
    showCounter.innerHTML = `you have ${counter} thing to do`;
  }
  if (counter >= 2) {
    showCounter.innerHTML = `you have ${counter} things to do`;
  }
}

function erase(){

}