import { fetchData } from "./fetchData";
import { reanderTasks } from "./reanderTasks";
import { saveTODB } from "./saveTODB";

export const deleteTask = (e, index) => {
  const answer = confirm("Are you sure you want to delete this task?");
  if (!answer) return;
  const tasks = fetchData("tasks");
  tasks.splice(index, 1);
  saveTODB("tasks", tasks);
  reanderTasks();
};
