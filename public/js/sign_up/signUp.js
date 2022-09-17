// Signing Up 
const signUpBtn = document.getElementById("signUpFormSubmit");

if (signUpBtn) {

  signUpBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // Get all elements from form 
    const newName = document.querySelector(".signUp-form-name").value;
    const newEmail = document.querySelector(".signUp-form-email").value;
    const newPassword = document.querySelector(".signUp-form-password").value;

    // check if all input fields are filled in
    if (newName == "") {
      swal({
        title: "What should we call you?",
        text: "Empty input field, please add your name",
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

    // check Password Length

    let isValidPass = await checkPassword(newPassword);

    if (!isValidPass) {
      return;
    }

    // Regex Check 
    const isNameValid = await regexCheckName(newName);
    const isEmailValid = await regexCheckEmail(newEmail); 

    if (!isNameValid) {

      swal({
        title: "Hmmm...",
        text: "Please try another name",
        button: "Ok"
      });

      return;
    }

    if (!isEmailValid) {

      swal({
        title: "Email not valid",
        text: "Please try another email",
        button: "Ok"
      });

      return;
    }

    swal({
      icon: "success",
      text: "Ayyy, you're in!",
      button: false
    });

    setTimeout(() => {

      swal({
        text: "Redirecting...",
        button: false
      });
      
    }, 1500);


    setTimeout(() => {

      // After all checks, make call to Register the new user  
      registerUser(newName, newEmail, newPassword);

    }, 3000);

  });
}