let pwField = document.getElementsByClassName("login-password");
let pwHideBtn = document.getElementsByClassName("password-hide-btn");
function hidePw(a) {
  console.log(a);
  if (pwField[a].type == "password") {
    pwField[a].type = "text";
    pwHideBtn[a].name = "eye-off";
  } else {
    pwField[a].type = "password";
    pwHideBtn[a].name = "eye";
  }
}
let filter = document.getElementById("filter-container");
console.log(filter);
let signupField = document.getElementsByClassName("signup");
function signupOn() {
  signupField[0].style.display = "flex";
  filter.style.display = "block";
  setTimeout(() => {
    filter.style.animation = "filter-on 0.3s ease forwards";
  }, 100);
  setTimeout(() => {
    signupField[0].style.animation = "open-signup 0.3s ease forwards";
  }, 400);
}
function signupOff() {
  signupField[0].style.animation = "close-signup 0.5s ease forwards";
  setTimeout(() => {
    filter.style.animation = "filter-off 0.5s ease forwards";
  }, 300);
  setTimeout(() => {
    signupField[0].style = "";
    filter.style = "";
  }, 1000);
}
let confirmPassword = document.getElementsByClassName("confirm-password");
console.log(confirmPassword[1]);
function confirm() {
  let a = confirmPassword[0].value;
  let b = confirmPassword[1].value;
  let passwordCheck = a == b ? true : false;
  console.log(passwordCheck);
  if (passwordCheck === false) {
    confirmPassword[0].style.animation = "warning-on 1s linear forwards";
    confirmPassword[1].style.animation = "warning-on 1s linear forwards";
    document.getElementById("warning-password").style.animation = "open-signup 1s linear forwards";
  }
  if (passwordCheck === true) {
    confirmPassword[0].style.animation =
    "warning-off 1.5s linear forwards";
    confirmPassword[1].style.animation =
    "warning-off 1.5s linear forwards";
    let c = document.getElementById("warning-password").style.animation;
    console.log(c);
    if(c == "1s linear 0s 1 normal forwards running open-signup") {
      document.getElementById("warning-password").style.animation = "close-signup 0.6s linear forwards";
    }
  }
}
