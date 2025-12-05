import {  updateItemsLeft } from "./index";
import { outputElement } from "./Elements";
import { fetchData } from "./fetchData";
import { initTaskListeners } from "./initTaskListeners";

export const reanderTasks = (tasks = null) => {
  tasks = tasks || fetchData("tasks");

  if (!tasks || tasks.length === 0) {
    outputElement.innerHTML = "<p class='noTasks'>No tasks yet...</p>";
    return;
  }

  outputElement.innerHTML = tasks
  .map(
    (task, index) => `
    <ul draggable="true" class="section-output__list TaskList">
      <span class="section-output__list__circle ${
        task.isCompleted ? "checked" : ""
      }" data-index="${index}"></span>
      <li class="section-output__list__value ${
        task.isCompleted ? "done" : ""
      }">${task.value}</li>
      <img class="deleteIcon" src="./images/icon-cross.svg" alt="delete" data-index="${index}">
    </ul>
  `
  )
  .join("");
  initTaskListeners();
  updateItemsLeft();
};