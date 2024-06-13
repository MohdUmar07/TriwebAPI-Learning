// How will you write a method on Date, which will give you next date

function getNextDate() {
    let date = this.getDate();
    return date + 1;
  }
  

  let myDateInstance = new Date();
  

  Date.prototype.getNextDate = getNextDate;
  
  const nextDate = myDateInstance.getNextDate();
  console.log(`Next date is ${nextDate}`);
  
  let myDateInstance1 = new Date();
  
  const nextDate1 = myDateInstance1.getNextDate();
  console.log(`Next date is ${nextDate1}`);