function checkCashRegister(price, cash, cid) {
  
    const currency = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.10,
      "QUARTER": 0.25,
      "DOLLAR": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    };
    const changeArr = [];
    let change = cash - price;
  
    if (change > cid) {
      return {status: "INSUFFICIENT_FUNDS", change: changeArr}
    } else if (change === cid) {
      return {status: "CLOSED", change: cid}
    } 
  
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);