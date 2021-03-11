function telephoneCheck(str) {
    let newStr = str.replace(/\s*/g, "");
    const numbers = /^[0-9]+$/;
    let countHyphen = 0;
    let countParen = 0;
    let numDigits = 0;
    let countryCode = 1;
  
    newStr = newStr.split("");
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i].search(/[()]/) != -1) countParen++;
      if ()
  
  
  
      if (newStr.length < 10 || newStr.length > 11) {
        return false
      }
      return true;
    }
    console.log = newStr;
  }
  
  telephoneCheck("555-555-5555");