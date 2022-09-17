// User Logs

// Log Out 
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("/api/user/logout", {
      method: "POST"
    })
      .then(() => {
        window
          .document
          .location
          .href = "/";
      })
      .catch(err => console.log(err));
  });
}

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
    swal({
      className: "swal",
      title: "Uh oh...",
      text: "It seems like this account already exist.",
      button: "Ok"
    });

  });
}