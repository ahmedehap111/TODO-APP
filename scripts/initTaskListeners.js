import { updateItemsLeft } from "./index";
import { deleteTask } from "./deleteTask";
import { deleteIcons } from "./Elements";
import { fetchData } from "./fetchData";
import { reanderTasks } from "./reanderTasks";
import { saveTODB } from "./saveTODB";

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
