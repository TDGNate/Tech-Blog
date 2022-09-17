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