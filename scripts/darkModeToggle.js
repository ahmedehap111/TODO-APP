import { imgBG, toggleButton } from "./Elements";
import { saveTODB } from "./saveTODB";


export const darkModeToggle = () => {
  const isDark = document.body.classList.toggle("dark-mode");
  toggleButton.src = isDark
    ? "../images/icon-sun.svg"
    : "../images/icon-moon.svg";
  imgBG.src = isDark
    ? "./images/bg-desktop-dark.jpg"
    : "./images/bg-desktop-light.jpg";

  saveTODB("darkModeFlag", isDark);
};


