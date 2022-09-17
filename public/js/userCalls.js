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

    swal({
      className: "swal",
      title: "Uh oh...",
      text: "It seems like this account already exist.",
      button: "Ok"
    });

  });
}