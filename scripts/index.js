function toggleNavgation() {
    var targetNav = document.getElementById("navbar-div");
    console.log(targetNav.className);
    targetNav.classList.toggle("open");
}

function closeNavgation() {
    var targetNav = document.getElementById("navbar-div");
    targetNav.classList.remove("open");
}
