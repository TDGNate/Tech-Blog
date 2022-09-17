// Signing Up 
const signUpBtn = document.getElementById("signUpFormSubmit");

if (signUpBtn) {

  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get all elements from form 
    const newName = document.querySelector(".signUp-form-name").value;
    const newEmail = document.querySelector(".signUp-form-email").value;
    const newPassword = document.querySelector(".signUp-form-password").value;

    // check if all input fields are filled in
    if (newName == "") {
      swal({
        title: "What should we call you?",
        text: "Empty input field, please add your name.",
        button: "Ok"
      });
      
      return;
    } else if (newEmail == "") {
      swal({
        title: "Don't forget your Email",
        button: "Ok"
      });

      return;
    } else if (newPassword == "") {
      swal({
        title: "Please add your password",
        text: "Make it secure!",
        button: "Ok"
      });

      return;
    }

    // Regex Check 
    const isNameValid = regexCheckName(newName);
    // const isEmailValid = regexCheckEmail(newEmail); 

    console.log(isNameValid);

  });
}