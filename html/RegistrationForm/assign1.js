"use strict";
var txtPwd = document.getElementById("pwd");
var cnfPwd = document.getElementById("com-pwd");
txtPwd.onchange = confirmPassword;
cnfPwd.onkeyup = confirmPassword;

function confirmPassword() {
    txtPwd.setCustomValidity("");
    if (txtPwd.value != cnfPwd.value) {
        txtPwd.setCustomValidity("Passwords don't match.");
    }
}