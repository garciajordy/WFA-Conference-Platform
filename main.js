// Menu button
let main = document.querySelector(".main-navigation")
let menu = document.querySelector(".menu-icon")
let opeen = true;
function openMenu() {
    if (opeen == true) {
        opeen = false;
        menu.classList.add("open");
        main.classList.add("display-nav")

    }

    else {
        menu.classList.remove("open");
        main.classList.remove("display-nav")
        opeen = true;
    }
}