document.addEventListener("DOMContentLoaded", function(e) {

    /* menu trigger */
    let triggerBtn = document.getElementsByClassName("menu-trigger-btn");

    triggerBtn[0].addEventListener("click", function(e) {

        let menuToggleIcon = document.getElementById("menu-toggle-icon");
        let logoIcon = document.getElementById("logo-icon");
        let mobileMenu = document.getElementById("main-mobile-menu");

        if (triggerBtn[0].style.color === "" | triggerBtn[0].style.color === "black") {
            triggerBtn[0].style.color = "white";
        } else {
            triggerBtn[0].style.color = "black";
        }

        let fillValue = logoIcon.getAttribute("fill");
        if (fillValue === null | fillValue === "black") {
            logoIcon.setAttribute("fill", "white");
        } else {
            logoIcon.setAttribute("fill", "black");
        }

        menuToggleIcon.classList.toggle("bi-caret-down-fill");
        menuToggleIcon.classList.toggle("bi-caret-up-fill");

        if (mobileMenu.style.display === "" || mobileMenu.style.display === "none") {
            mobileMenu.style.display = "block";
        } else {
            mobileMenu.style.display = "none";
        }

    })
})





