const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu"); 

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        //adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
    } else {
        menu.classList.add("active");

        //adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);