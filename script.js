"use strict"
const toggleBtn = document.querySelector(".lucide-menu");
const navUl = document.querySelector("#navLinks");
const navLinks = document.querySelectorAll("#headerNav ul a");

/* navigation */
/* show / hide Nav Ul */
toggleBtn.addEventListener("click", () => {
    navUl.classList.toggle("active");
});
/* close ul on click of nav links */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navUl.classList.remove("active");
        const targetId = link.getAttribute("href");

        setTimeout(() => {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: "smooth"
                })
            }
        }, 100)
    });
});
/* close ul on click of outside Ul */
document.addEventListener("click", (e) => {
    const ulOpen = navUl.classList.contains("active");
    const clickedNav = navUl.contains(e.target);
    const clickedToggle = toggleBtn.contains(e.target);

    if (ulOpen && !clickedNav && !clickedToggle) {
        navUl.classList.remove("active");
    }
})

/* Form  */