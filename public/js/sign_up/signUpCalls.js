// Register Call

// Create user function 
async function registerUser(name, email, password) {
  console.log(name, email, password);

  // Making Call 
  await fetch("/api/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
    
  })
    .then(() => {
      window
        .document
        .location
        .href = "/sign-up/success";
    })
    .catch((err) => {
      console.log(err);
    });
}