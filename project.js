function toggleMenu() {
    let menu = document.getElementById("navLinks");
    menu.classList.toggle("active");
}


let links = document.querySelectorAll("#navLinks a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        let menu = document.getElementById("navLinks");
        menu.classList.remove("active");
    });
});




function darkMode() {

    let body = document.querySelector("body");
    let background = document.querySelector(".background");
    let button = document.getElementById("mode");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {

        background.style.backgroundImage = "url('light-bg.jpg')";
        button.innerHTML = "☾";

    } else {

        background.style.backgroundImage = "url('background.jpg')";
        button.innerHTML = "☀︎";

    }
}