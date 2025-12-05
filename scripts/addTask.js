import { addButton, inputElement } from "./Elements";
import { fetchData } from "./fetchData";
import { reanderTasks } from "./reanderTasks";
import { saveTODB } from "./saveTODB";


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