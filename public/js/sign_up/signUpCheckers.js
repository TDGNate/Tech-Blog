// Sign Up Checkers

// check name regex
async function regexCheckName(name) {

  const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  
  // Regex Check 
  let checker = nameRegex.test(name);

  return checker;

}

// check email regex
 async function regexCheckEmail(email) {

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Regex Check 
  let checker = emailRegex.test(email);

   return checker;
   
}

// check name 
async function checkName(name) {

  if (name.length > 45) {

    swal({
      title: "Username is too long!",
      text: "Your username is over 45 characters\n Please use a different name :)",
      button: "Ok"
    });

    return false;
    
  } else return true;

}

// check password 
async function checkPassword(password) {

  if (password.length < 8) {

    swal({
      title: "Password is too short!",
      text: "Password must have a minimum of 8 characters",
      button: "Ok"
    });

    return false;
    
  } else return true;

}