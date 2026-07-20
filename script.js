"use strict"
const toggleBtn = document.querySelector(".lucide-menu");
const navUl = document.querySelector("#navLinks");
const navLinks = document.querySelectorAll("#headerNav ul a");
const form = document.getElementById("form");
/* form input elements */
const name = document.getElementById("fullname");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");

/* form error elements */
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const telephoneError = document.getElementById("telephoneError");



/* regex pattern */
const nameReg = /^[A-Za-z\s\-']+$/;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telephoneReg = /^\+?[\d\s\-\(\)]{7,15}$/;

/* 01 - navigation */
/* show / hide Nav Ul */
toggleBtn.addEventListener("click", () => {
    navUl.classList.toggle("active");
 })
/* close ul on click of nav links */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
             navUl.classList.remove("active");
     })
 })
/* close ul on click of outside Ul */
document.addEventListener("click", e => {
    const navOpen = navUl.classList.contains("active");
    const clickToggle = toggleBtn.contains(e.target);
    const clickedNav = navUl.contains(e.target);


    if (navOpen && !clickToggle && !clickedNav) {
        navUl.classList.remove("active");
    }
})
 
/* 02 - Form  */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    /* form input values */
const nameValue = name.value.trim();
const emailValue = email.value.trim();
    const telValue = telephone.value.trim();
    let isValid = true;

    if (!nameReg.test(nameValue)) {
        isValid = false;
    nameError.textContent = "Name can only contain letters, spaces, and hyphens";
} else {
    nameError.textContent = "";
}

    if (!emailReg.test(emailValue)) {
            isValid = false;

    emailError.textContent = "Please enter a valid email address (e.g. name@example.com)";
} else {
    emailError.textContent = "";
}

    if (!telephoneRegReg.test(telValue)) {
            isValid = false;

    telephoneError.textContent = "Please enter a valid phone number (7–15 digits, numbers only)";
} else {
    telephoneError.textContent = "";
}
    if (isValid) {
        form.reset();
}
})