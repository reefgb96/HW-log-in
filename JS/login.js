"use strict";

const signIn = () => {
let regUsers = JSON.parse(localStorage.getItem("users"));
console.log(JSON.parse(localStorage.getItem("users")));
let loggedIn = false;
  const logInEmail = document.getElementById("login-email");
  const logInPass = document.getElementById("login-pass");
  let inputs2 = [logInEmail, logInPass];
  let emailVal =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (logInEmail.value.match(emailVal)) {
    if (!logInEmail.value || !logInPass.value) {
      let loggedIn = false;
      alert("fill all inputs.");
      for (let item of inputs2) {
        if (!item.value) {
          item.classList.add("red");
        }
        setTimeout(() => {
          item.classList.remove("red");
        }, 1000);
      }
    } else {
      if (
        logInEmail.value === regUsers[0].email &&
        logInPass.value === regUsers[0].password
      ) {
        loggedIn = true;
        alert("succussful log in");
        location.href = "../index.html";
      } else {
        alert("invalid email or password");
      }
    }
  } else {
    alert("invalid email.");
  }
};

