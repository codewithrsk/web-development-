function addNewTask() {
  const taskToAdd = document.getElementById("newTask").value;

  const LI = document.createElement("li");
  LI.classList.add("my-3");

  const DIV = document.createElement("div");
  DIV.classList.add("d-flex", "align-items-center");

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = taskToAdd;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );
  BUTTON.onclick = () => {
    LI.remove();
    removeTaskFromLocalStorage(taskToAdd);
  };

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  const SPAN2 = document.createElement("span");
  SPAN2.innerText = "Delete";

  BUTTON.appendChild(I);
  BUTTON.appendChild(SPAN2);

  DIV.appendChild(SPAN1);
  DIV.appendChild(BUTTON);

  LI.appendChild(DIV);

  document.getElementById("taskDiv").classList.remove("d-none");

  document.getElementById("taskList").appendChild(LI);

  saveToLocalStorage(taskToAdd);

  document.getElementById("newTask").value = "";
}

function saveToLocalStorage(taskToAdd) {
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  TaskArray.push(taskToAdd);

  const newTaskArray = JSON.stringify(TaskArray);

  localStorage.setItem("toDoTask", newTaskArray);
}

function getTaskFromLocalStorage() {
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  console.log(TaskArray);

  TaskArray.forEach((element) => {
    const LI = document.createElement("li");
    LI.classList.add("my-3");

    const DIV = document.createElement("div");
    DIV.classList.add("d-flex", "align-items-center");

    const SPAN1 = document.createElement("span");
    SPAN1.innerText = element;

    const BUTTON = document.createElement("button");
    BUTTON.classList.add(
      "btn",
      "btn-danger",
      "ms-4",
      "d-flex",
      "gap-3",
      "align-items-center",
      "justify-content-center",
    );
    BUTTON.onclick = () => {
      LI.remove();
      removeTaskFromLocalStorage(element);
    };

    const I = document.createElement("i");
    I.classList.add("bi", "bi-trash");

    const SPAN2 = document.createElement("span");
    SPAN2.innerText = "Delete";

    BUTTON.appendChild(I);
    BUTTON.appendChild(SPAN2);

    DIV.appendChild(SPAN1);
    DIV.appendChild(BUTTON);

    LI.appendChild(DIV);

    document.getElementById("taskDiv").classList.remove("d-none");

    document.getElementById("taskList").appendChild(LI);
  });
}

getTaskFromLocalStorage();

function removeTaskFromLocalStorage(taskItem) {
  console.log(taskItem);

  const TaskArray = JSON.parse(localStorage.getItem("toDoTask"));

  console.log(TaskArray);

  const newTaskArray = TaskArray.filter((item) => item !== taskItem);

  console.log(newTaskArray);

  const newTaskString = JSON.stringify(newTaskArray);

  localStorage.setItem("toDoTask", newTaskString);
}