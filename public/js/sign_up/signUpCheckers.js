function regexCheckName(name) {

  const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  
  // Regex Check 
  let checker = nameRegex.test(name);

  return checker;

}