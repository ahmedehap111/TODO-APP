import { toggleButton } from "./Elements.js";

export const initDataStartUP = () => {
  const darkModeFlag = localStorage.getItem("darkModeFlag");
  const isDark = darkModeFlag === "true";

  if (isDark) {
    document.body.classList.add("dark-mode");
    toggleButton.src = "../images/icon-sun.svg";
  } else {
    document.body.classList.remove("dark-mode");
    toggleButton.src = "../images/icon-moon.svg";
  }
};
