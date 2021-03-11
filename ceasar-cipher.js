function rot13(str) {

    let decodeStr = "";
      
    for (let i = 0; i < str.length; i++) {
      let shiftLet = str.charCodeAt(i);
      if (shiftLet < 65 || shiftLet > 90) {
        decodeStr += String.fromCharCode(shiftLet);
      } else if (shiftLet < 78) {
        decodeStr += String.fromCharCode(shiftLet + 13);
      } else {
        decodeStr += String.fromCharCode(shiftLet - 13);
      }
    }
    console.log(decodeStr);  
    return decodeStr;
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?")
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")