// Sign Up Checkers

// check name 
async function regexCheckName(name) {

  const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  
  // Regex Check 
  let checker = nameRegex.test(name);

  return checker;

}

// check email 
 async function regexCheckEmail(email) {

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Regex Check 
  let checker = emailRegex.test(email);

   return checker;
   
}

// check password 
async function checkPassword(password) {

  if (password.length < 8) {

    swal({
      title: "Password is too short!",
      text: "Password must have a minimum of 8 characters",
      button: "Ok"
    });

    return;
    
  }
}