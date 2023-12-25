"use strict";

const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const ph_noInput = document.getElementById("ph_no");
const confirmInput = document.getElementById("confirm_password");

const sendData = function (sRate, count) {
  if (sRate === count)
  Swal.fire('Regestration succesfully \nThanks for your response');

};

const successMsg = function () {
  const f_c = document.getElementsByClassName("form--control success");
  const sRate = f_c.length;
  const count = 5; // Assuming you have 5 fields to validate

  sendData(sRate, count);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

const isEmail = function (email) {
  var atSymbol = email.indexOf("@");
  if (atSymbol < 0) {
    return false;
  }
  var dot = email.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === email.length - 1) return false;
  return true;
};

const validation = function () {
  const usernameValue = usernameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const ph_noValue = ph_noInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmValue = confirmInput.value.trim();

  // Check username
  if (usernameValue === "") {
    setErrorMsg(usernameInput, "Username cannot be blank");
  } else if (usernameValue.length <= 2) {
    setErrorMsg(usernameInput, "Username must be at least 3 characters");
  } else {
    setSuccessMsg(usernameInput);
  }

  // Similar validations for other fields...
  if (emailValue === "") {
    setErrorMsg(emailInput, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorMsg(emailInput, "Invalid email");
  } else {
    setSuccessMsg(emailInput);
  }

  if (ph_noValue === "") {
    setErrorMsg(ph_noInput, "Phone number cannot be blank");
  } else if (ph_noValue.length !== 10) {
    setErrorMsg(ph_noInput, "Invalid phone number");
  } else {
    setSuccessMsg(ph_noInput);
  }

  if (passwordValue === "") {
    setErrorMsg(passwordInput, "Password cannot be blank");
  } else if (passwordValue.length <= 5) {
    setErrorMsg(passwordInput, "Minimum 6 characters");
  } else {
    setSuccessMsg(passwordInput);
  }

  if (confirmValue === "") {
    setErrorMsg(confirmInput, "Confirm password cannot be blank");
  } else if (confirmValue === passwordValue) {
    setSuccessMsg(confirmInput);
  } else {
    setErrorMsg(confirmInput, "Password must be matched");
  }

  // Check success messages
  successMsg();
};

const setErrorMsg = function (input, errorMsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.textContent = errorMsg;
  small.style.visibility = "visible";
  formControl.className = "form--control error";
};

const setSuccessMsg = function (input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.style.visibility = "hidden";
  formControl.className = "form--control success";
};
