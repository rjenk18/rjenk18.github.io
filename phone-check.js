function telephoneCheck(str) {

  str = str.replace(/\s*[\-]/g, "");
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let hasPermittedCharsOnly = false;
  let hasCorrectParentheses = false;

  if (str.length === 10) {
    hasTenDigits = true;
  };

  if (str.length === 11) {
    hasElevenDigits
  }

  for (let i = 0; i < str.length; i++) {
    if (str.search[i](/[0-9]+/g)) {
      hasPermittedCharsOnly = true;
    }
  }
  
  if (!hasTenDigits && !hasElevenDigits) {
    console.log(false);
    return false;
  } else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
    console.log(false);
    return false;
  } else if (hasElevenDigits && !startsWithOne) {
    console.log(false);
    return false;
  } 
  console.log(true);
  return true;
  
  
  
  
  
}

telephoneCheck("1 555-555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");



  let numCheck = /^(1\s?)?[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;