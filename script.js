const navIcon = document.querySelector(".navbar__hamb");
//const icon = document.querySelector(".icon");
const mobilemenu = document.querySelector(".mobilemenu");

navIcon.addEventListener("click",menu) 
function menu() {
        mobilemenu.classList.toggle("active");
 }
