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

/*     "<div class='containerContent'><h2>Work</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in quimollitia sint suscipit, rerum aperiam hic magnam perspiciatis adipiscieligendi repellat a non. Nam esse eligendi quas. Obcaecati, tempora?</p></div><div class='containerButtons'><div class='circulo'></div><div class='circulo'></div></div> ";
 */


let btnAddTask = document.getElementById("addTasks")

btnAddTask.addEventListener("click", (e)=>{
    e.preventDefault()
    let taskName = document.getElementById("taskName").value
    let task = document.getElementById("Task").value
    createTask(taskName, task)
    turnOff()

})

function createTask(taskName, task){
    return{
        taskName: taskName,
        task: task
    }

}