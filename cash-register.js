function checkCashRegister(price, cash, cid) {
  
  const currency = [
    {name: "ONE HUNDRED", value: 100.00},
    {name: "TWENTY", value: 20.00},
    {name: "TEN", value: 10.00},
    {name: "FIVE", value: 5.00},
    {name: "ONE", value: 1.00},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.10},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01},
  ];

  let display = {status: null, change: []};
  let drawer = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    {total: 0}
  )
  let change = cash - price;

  if (change > drawer.total) {
    display.status = "INSUFFICIENT_FUNDS";
    console.log (display);
    return display;
  } else if (change === drawer.total) {
    display.status = "CLOSED";
    display.change = cid;
    console.log (display);
    return display;
  }

  let changeArr = currency.reduce(function(acc, curr) {
    let drawerValue = 0;
    while (drawer[curr.name] > 0 && change >= curr.value) {
      change -= curr.value;
      drawer[curr.name] -= curr.value;
      drawerValue+= curr.value;

      change = Math.round(change * 100) / 100;
    }
    if (drawerValue > 0) {
      acc.push([curr.name, drawerValue]);
    }
    return acc;
  }, []);
  
  if (changeArr.length < 1 || change > 0) {
    display.status = "INSUFFICIENT_FUNDS";
    console.log(display);
    return display;
  } else {
    display.status = "OPEN";
    display.change = changeArr;
    console.log(display);
    return display;
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])