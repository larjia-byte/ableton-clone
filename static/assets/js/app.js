document.addEventListener("DOMContentLoaded", function(e) {

    /* menu trigger */
    const triggerBtn = document.getElementsByClassName("menu-trigger-btn");

    console.log("triggerBtn")
    console.log(triggerBtn)

    triggerBtn[0].addEventListener("click", function(e) {

        const triggerArrowDown = triggerBtn[0].getElementsByClassName("bi bi-caret-down-fill");
        const triggerArrowUp = triggerBtn[0].getElementsByClassName("bi bi-caret-up-fill");

        triggerArrowDown[0].style.display = triggerArrowDown[0].style.display === "inline-block" ? "none" : "inline-block"
        triggerArrowUp[0].style.display = triggerArrowUp[0].style.display === "none" ? "inline-block" : "none"
    })
})





