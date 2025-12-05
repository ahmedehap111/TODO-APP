import { addTask } from "./addTask.js";
import { darkModeToggle } from "./darkModeToggle.js";
import {
  addButton,
  clearBtn,
  filterActiveBtn,
  filterAllBtn,
  filterBtns,
  filterCompletedBtn,
  itemLeft,
  toggleButton,
} from "./Elements.js";
import { fetchData } from "./fetchData.js";
import { initDataStartUP } from "./initDataStartUP.js";
import { reanderTasks } from "./reanderTasks.js";
import { saveTODB } from "./saveTODB.js";

toggleButton.addEventListener("click", () => darkModeToggle());

// filter
clearBtn.addEventListener("click", () => {
  let tasks = fetchData("tasks") || [];
  tasks = Array.isArray(tasks) ? tasks : [];

  const filteredTasks = tasks.filter((task) => !task.isCompleted);
  saveTODB("tasks", filteredTasks);
  reanderTasks();
});

export const updateItemsLeft = () => {
  let tasks = fetchData("tasks");
  if (!Array.isArray(tasks)) tasks = [];

  const items = tasks.filter((task) => !task.isCompleted).length;
  itemLeft.textContent = `${items} items left`;
};
addButton.addEventListener("click", () => {
  addTask();
  updateItemsLeft();
});

filterAllBtn.addEventListener("click", () => {
  reanderTasks();
});

filterActiveBtn.addEventListener("click", () => {
  const tasks = fetchData("tasks");
  const filteredTasks = tasks.filter((task) => !task.isCompleted);
  reanderTasks(filteredTasks);
});

filterCompletedBtn.addEventListener("click", () => {
  const tasks = fetchData("tasks");
  const filteredTasks = tasks.filter((task) => task.isCompleted);
  reanderTasks(filteredTasks);
});

const setActiveFilter = (btn) => {
  filterBtns.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
};
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveFilter(btn);
  });
});

initDataStartUP();
reanderTasks();
// end filter

// drag and drop
const output = document.getElementById("output");
let draggedItem = null;

const dragAndDrop = () => {

  output.addEventListener("dragstart", (e) => {
    if(e.target.tagName === "UL"){ 
      draggedItem = e.target;
      setTimeout(() => {
        draggedItem.style.display = "none";
      }, 0);
    }
  });

  output.addEventListener("dragend", (e) => {
    if(draggedItem){
      setTimeout(() => {
        draggedItem.style.display = "flex";
        draggedItem = null;
      }, 0);
    }
  });


  output.addEventListener("dragover", (e) => e.preventDefault());

  output.addEventListener("drop", (e) => {
    e.preventDefault();
    if(draggedItem && e.target.tagName === "UL"){
      const parent = draggedItem.parentNode;
      parent.insertBefore(draggedItem, e.target.nextSibling);
    }
  });
};

dragAndDrop();
// end drag and drop

/* 

  [x] toggle dark mode
  [x] add task
  [x] delete task
  [x] check task
  [x] initial data start up
  [x] reander tasks
  [x] save data to local storage
  [x] fetch data from local storage
  [x] filter tasks
  [x] set message
  [x] get message
  [x] delete all tasks is completed
  [x] drag and drop






*/
