"use strict";

const control = document.getElementsByClassName("control");
const login = control[0];
const password = control[1];
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

if (localStorage["authString"]) {
  formsChangeAuth(JSON.parse(localStorage["authString"])["user_id"]);
}
function clearFormData() {
  form.reset();
}
function formsChangeAuth(userID) {
  document.getElementById("signin").classList.remove("signin_active");
  userId.innerText = userID;
  welcome.classList.toggle("welcome_active");
}

form.addEventListener("submit", save);
function save(event) {
  event.preventDefault();
  if (login.value && password.value) {
    let formData = new FormData(form);
    const xhrPost = new XMLHttpRequest();
    xhrPost.responseType = "json";
    xhrPost.open(
      "POST",
      "https://students.netoservices.ru/nestjs-backend/auth"
    );
    xhrPost.onload = function () {
      let response = xhrPost.response;
      if (response["success"] === false) {
        alert("Неверный логин или пароль!");
      } else {
        formsChangeAuth(response["user_id"]);
        localStorage.setItem("authString", JSON.stringify(response));
      }
    };
    xhrPost.send(formData);
    clearFormData();
  } else {
    alert("Введите имя и пароль пожалуйста!");
    clearFormData();
  }
}