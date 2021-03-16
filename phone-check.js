function telephoneCheck(str) {

  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startWithOne = false;
  let hasPermittedCharsOnly = false;
  let hasCorrectParentheses = false;

  if (str[0] === "1") {
    str = str.slice(1, str.length);
  } if (str[0] === " ") {
    str = str.slice(1, str.length);
  }

  if (str[0] === "(" && str[4] === ")") {
    hasCorrectParentheses = true;
  }

  if (str.match(/\d/g).length === 10) {
    hasTenDigits = true;
  };

 // if (str.match(/^\(\d{3}\)/) || str.match(/\d{3}/)) {
 //   hasCorrectParentheses = true;
 // }

  if (str.match(/[\s\d\-]/)) {
    hasPermittedCharsOnly = true;
  }

  if (!hasTenDigits) {
    return false;
  } else if (!hasPermittedCharsOnly) {
    return false;
  }  else if (!hasCorrectParentheses) {
    return false;
  } else {
    return true;
  }
}

telephoneCheck("555-555-5555");



  let numCheck = /^(1\s?)?[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;