function checkPassword() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*]/.test(password);

    if (password.length < 6) {
        message.textContent = "Weak Password";
        message.style.color = "red";
    }
    else if (password.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial) {
        message.textContent = "Strong Password";
        message.style.color = "green";
    }
    else {
        message.textContent = "Medium Password";
        message.style.color = "orange";
    }
}
