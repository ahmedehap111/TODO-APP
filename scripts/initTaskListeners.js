import { updateItemsLeft } from "./index.js";
import { deleteTask } from "./deleteTask.js";
import { deleteIcons } from "./Elements.js";
import { fetchData } from "./fetchData.js";
import { reanderTasks } from "./reanderTasks.js";
import { saveTODB } from "./saveTODB.js";

export const initTaskListeners = () => {
  deleteIcons().forEach((icon) => {
    const index = icon.dataset.index;
    icon.addEventListener("click", (e) => deleteTask(e, index));
  });

  const circles = document.querySelectorAll(".section-output__list__circle");
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      const index = circle.dataset.index;
      const tasks = fetchData("tasks");

      tasks[index].isCompleted = !tasks[index].isCompleted;
      saveTODB("tasks", tasks);
      reanderTasks();
      updateItemsLeft();
    });
  });
};
