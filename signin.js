const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

// show hide password

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye")
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash")
                })
            }
        })
    })
})

// signUp and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
})
login.addEventListener("click", () => {
    container.classList.remove("active");
})



// let user_input = prompt("How old are you ", 10);

if (user_input >= 10) {
    alert("Welcome to our site");
} else {
    alert("you are not allowed to use this website");
    window.location.href = "https://PBSkids.org";
}