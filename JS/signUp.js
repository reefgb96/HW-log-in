"use strict";

const submitBtn = document.getElementById("submit-btn");
let userArr = [];


const submit = () => {
    const inputFirstName = document.getElementById("inp-firstN");
    const inputLastName = document.getElementById("inp-lastN");
    const inputEmail = document.getElementById("inp-email");
    const inputPass = document.getElementById("inp-pass");
    let inputs = [inputFirstName, inputLastName, inputEmail, inputPass];
    let user = new User (inputFirstName.value, inputLastName.value, inputEmail.value, inputPass.value);

  let emailFound = userArr.find(
    (searchUser) => searchUser.email === inputEmail.value
  );
  let emailVal =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (
    !inputFirstName.value ||
    !inputLastName.value ||
    !inputEmail.value ||
    !inputPass.value
  ) {
    alert("Please fill all inputs");
    for (let item of inputs) {
      if (!item.value) {
        item.classList.add("red");
      }
      setTimeout(() => {
        item.classList.remove("red");
      }, 1000);
    }
  } else {
    if (inputEmail.value.match(emailVal)) {
      if (!emailFound) {
        userArr = [...userArr, user];
        console.log(userArr);
        localStorage.setItem("users", JSON.stringify([user]));
        alert("Registered succussfully");
        location.href = '../login.html'
      } else {
        alert("This email is already registered.");
      }
    } else {
      alert("invalid email!");
    }
  }
};
