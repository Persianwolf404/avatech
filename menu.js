function showMenu() {
    var menu = document.getElementById("menu");
    var icon = document.getElementById("rot");

    if (menu.className === "header-menu") {
        menu.className += " inline-block";
        icon.className = "fa fa-times";
    } else {
        menu.className = "header-menu";
        icon.className = "fa fa-bars";
    }
}

 