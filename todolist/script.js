let btnPlus = document.getElementById("btnPlus");

btnPlus.addEventListener("click", (c) => {
  turnOn();
});

let divToAddTasks = document.getElementById("containerInputTasks");

function turnOn(c) {
  divToAddTasks.style.display = "flex";
}

let btnX = document.getElementById("close");

btnX.addEventListener("click", (c) => {
  turnOff();
});

function turnOff(c) {
  divToAddTasks.style.display = "none";
  let taskName = document.getElementById("taskName");
  let taskDescription = document.getElementById("Task");
  taskName.value = "";
  taskDescription.value = "";
}

let btnAddTask = document.getElementById("addTasks");
btnAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  let taskName = document.getElementById("taskName").value;
  let taskDescription = document.getElementById("Task").value;
  addTasks(taskName, taskDescription);
});

let tasks = [];

function idGenerator() {
  let id = Date.now();

  return id;
}

function addTasks(taskName, taskDescription) {
  var taskObject = {
    taskName: taskName,
    taskDescription: taskDescription,
    taskTrash:
      " <img src='/todolist/assets/trash.png'/ onclick='deleteTask(this)'>",
    idRandom: idGenerator(),
  };
  tasks.push(taskObject);
  turnOff();
  updateTask();
}

function updateTask() {
  if (tasks.length == 0) {
    containerTasks.innerHTML = "";
  }

  let div = "<div>";
  tasks.forEach((task) => {
    let containerTasks = document.getElementById("containerTasks");
    div += ` <div class="cards" id-data="${task.idRandom}">
            <div class="containerContent">
              <h2>${task.taskName}</h2>
              <p>${task.taskDescription}</p>
            </div>
            <div class="containerButtons">
              <img src="/todolist/assets/trash.png" onclick="deleteTask(this)" id-data="${task.idRandom}" />
            </div>
          </div>`;
    div += "</div>";
    containerTasks.innerHTML = div;
  });
}

function deleteTask(element) {
  tasks.find((item, i) => {
    if (item.idRandom == element.getAttribute(["id-data"])) {
      return tasks.splice(i, 1);
    }
  });

  updateTask();
}
