const AppTitle = "Időjárás applikáció";
const Author = "Dóczi Adrián Márk 13. A";
const Company = "Bajai SZC Türr Istvàn Technikum";
const ServerUrl = "http://localhost:3000";

let title = document.getElementById("appTitle");
let company = document.getElementById("Fcompany");
let author = document.getElementById("Fauthor");

let lightmodeBtn = document.getElementById("lightmodeBtn");
let darkmodeBtn = document.getElementById("darkmodeBtn");
let date = document.getElementById("Fdate");
date.textContent = new Date().getFullYear() + " © Minden jog fenntartva";

let main = document.querySelector("main");

let mainMenu = document.getElementById("mainMenu");
let userMenu = document.getElementById("userMenu");

let theme = "light";

title.innerHTML = AppTitle;

lightmodeBtn.addEventListener("click", () => {
  setTheme("light");
});

darkmodeBtn.addEventListener("click", () => {
  setTheme("dark");
});

let loadTheme = () => {
  theme = "dark";
  if (localStorage.getItem("idojarasTheme")) {
    theme = localStorage.getItem("idojarasTheme");
  }
  setTheme(theme);
};

let saveTheme = (theme) => {
  localStorage.setItem("idojarasTheme", theme);
};

let setTheme = (theme) => {
  document.documentElement.setAttribute("data-bs-theme", theme);
  setThemeBtn(theme);
  saveTheme(theme);
};

setThemeBtn = (theme) => {
  if (theme == "light") {
    lightmodeBtn.classList.add("hide");
    darkmodeBtn.classList.remove("hide");
  } else {
    lightmodeBtn.classList.remove("hide");
    darkmodeBtn.classList.add("hide");
  }
};

company.textContent = Company;
author.textContent = Author;

loadTheme();
