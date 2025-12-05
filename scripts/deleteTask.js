import { fetchData } from "./fetchData.js";
import { reanderTasks } from "./reanderTasks.js";
import { saveTODB } from "./saveTODB.js";

export const deleteTask = (e, index) => {
  const answer = confirm("Are you sure you want to delete this task?");
  if (!answer) return;
  const tasks = fetchData("tasks");
  tasks.splice(index, 1);
  saveTODB("tasks", tasks);
  reanderTasks();
};
