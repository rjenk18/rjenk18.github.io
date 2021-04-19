function telephoneCheck(str) {  

  if (/^1?\s?(\(\d{3}\)|\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");