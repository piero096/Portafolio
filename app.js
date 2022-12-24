const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const CloseMenuBtn = document.querySelector(".close-menu");

function toggelMenu(){
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggelMenu);
CloseMenuBtn.addEventListener("click", toggelMenu);