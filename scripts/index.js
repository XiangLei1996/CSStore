function toggleNavgation() {
    var targetNav = document.getElementById("navbar-div");
    targetNav.classList.toggle("open");
}

function checkCheckBox(targetElement,checked,unchecked) {
    var checkIcon = targetElement.getElementsByTagName('i')[0];
    console.log(checkIcon);
    if (checkIcon.classList.contains(checked)) {
        checkIcon.classList.remove(checked);
        checkIcon.classList.add(unchecked);
    }
    else {
        checkIcon.classList.remove(unchecked);
        checkIcon.classList.add(checked);
    }
}
