// Register Call

// Create user function 
async function registerUser(name, email, password) {

  swal({
    text: "Almost done...",
    button: false
  });

  // console.log(name, email, password); 

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
    .then((res) =>
      
      res.json()

    )
    .then((data) => {

      setTimeout(() => {

        if (data.message === "email must be unique") {
  
          swal({
            icon: "error",
            text: "Email already in use!"
          });
  
          return;
        }
  
        swal({
          icon: "success",
          text: "Ayyy, you're in!",
          button: false
        });
  
        setTimeout(() => {
          
          window
            .document
            .location
            .href = "/sign-up/success";
          
        }, 1500);

      }, 500);

    })
    .catch((err) => {

      console.log(err);

    });
}
