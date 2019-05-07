function toggleNavgation() {
    var targetNav = document.getElementById("navbar-div");
    console.log(targetNav.className);
    targetNav.classList.toggle("open");
}

// function closeNavgation() {
//     var targetNav = document.getElementById("navbar-div");
//     targetNav.classList.remove("open");
// }

function toggleIt(targetElement,statusClass) {
    if(targetElement.hasClass(statusClass)) {
        targetElement.removeClass(statusClass);
    }
    else {
        targetElement.addClass(statusClass);
    }
}
