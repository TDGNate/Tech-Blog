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