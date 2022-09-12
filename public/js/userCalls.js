// User Logs 

console.log("login page connected");

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("/api/user/logout", {
    method: "POST"
  })
    .then(() => {
      window
      .document
      .location
      .href="/";
    })
  .catch(err => console.log(err));
});