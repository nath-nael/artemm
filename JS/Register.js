function validateName() {
    let inputName = document.querySelector("#name");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");
  
    if (valueName == "") {
      errorName.innerHTML = "Please enter your username";
      inputName.style.border = "solid red 1.5px";
      return false;
    } else {
      errorName.innerHTML = "";
      inputName.style.border = "solid white 1.5px";
      return true;
    }
  }

function validateEmail() {
    let inputEmail = document.querySelector("#email");
    let valueEmail = inputEmail.value;
    let errorEmail = document.querySelector("#error-email");
  
    if (valueEmail == "") {
      errorEmail.innerHTML = "Please enter your email";
      inputEmail.style.border = "solid red 1.5px";
      return false;
    } else if (!valueEmail.includes("@") || !valueEmail.includes(".")) {
      errorEmail.innerHTML = "Please enter a valid email";
      inputEmail.style.border = "solid red 1.5px";
      return false;
    } else {
      errorEmail.innerHTML = "";
      inputEmail.style.border = "solid white 1.5px";
      return true;
    }
  }
  
  function validatePass() {
    let inputPass = document.querySelector("#pass");
    let valuePass = inputPass.value;
    let errorPass = document.querySelector("#error-pass");
  
    if (valuePass == "") {
      errorPass.innerHTML = "Please enter your password";
      inputPass.style.border = "solid red 1.5px";
      return false;
    } else {
      errorPass.innerHTML = "";
      inputPass.style.border = "solid white 1.5px";
      return true;
    }
  }
  
  let stepBtn = document.querySelector("#req");
  stepBtn.addEventListener("click", function (e) {
    e.preventDefault();
  
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPassValid = validatePass();
  
    if (
        isNameValid &&    
        isEmailValid &&
        isPassValid
    ) {

      window.location.href='Login.html';
      
    }
});

const backButton = document.querySelector('.back');

backButton.addEventListener('click', () => {
    window.history.back();
});