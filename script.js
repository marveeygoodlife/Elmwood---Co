"use strict"
const toggleBtn = document.querySelector(".lucide-menu");
const navUl = document.querySelector("#navLinks");
const navLinks = document.querySelectorAll("#headerNav ul a");
const form = document.getElementById("form");
/* form input elements */
const name = document.getElementById("fullname");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");

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
    const isValid = validateEmail(email) && validateName(name) && validateTelephone(telephone);

    if (!isValid) {
        e.preventDefault();
    }
});
/* helper functions */
function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
}
function clearError(input) {
    const error = input.nextElementSibling;
    error.textContent = "";
}
/* validation functions */
function validateName(input) {
    const nameReg =/^[A-Za-z][A-Za-z\s'-]{1,}$/;
    const nameValue = input.value.trim();

    if (!nameReg.test(nameValue)) {
        input.classList.add("invalid");
        showError(input, "Name can only contain letters, spaces, and hyphens");
        return false;
    } 
    input.classList.remove("invalid");
    clearError(input);
    return true;
}
function validateEmail(input) {
    const emailValue = input.value.trim();
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailReg.test(emailValue)) {
        input.classList.add("invalid");
        showError(input, "Please enter a valid email address (e.g. name@example.com)");
        return false;
    }
    input.classList.remove("invalid");
    clearError(input);
    return true;
}
function validateTelephone(input) {
    const telValue = input.value.trim();
    const telephoneReg = /^\+?[\d\s\-\(\)]{7,15}$/;

    if (!telephoneReg.test(telValue)) {
        input.classList.add("invalid");
        showError(input, "Please enter a valid phone number (7–15 digits, numbers only)");
        return false;
    };
    input.classList.remove("invalid");
    clearError(input);
    return true;
}
/* validate when field is out of focus */
name.addEventListener("blur", (e) => validateName(e.target));
email.addEventListener("blur", (e) => validateEmail(e.target));
telephone.addEventListener("blur", (e) => validateTelephone(e.target));