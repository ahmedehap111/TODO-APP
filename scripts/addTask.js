import { addButton, inputElement } from "./Elements.js";
import { fetchData } from "./fetchData.js";
import { reanderTasks } from "./reanderTasks.js";
import { saveTODB } from "./saveTODB.js";


export const addTask = () => {
  addButton.addEventListener("click", () => {
    const value = inputElement.value.trim();
    if (!value || value.length >= 14) {
      return;
    }
    const task = {
      value: value,
      isCompleted: false,
    };

    const tasks = fetchData("tasks") || [];
    tasks.push(task);
    saveTODB("tasks", tasks);

    reanderTasks();
    inputElement.value = "";
  });
};