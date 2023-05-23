class BankStatement {
  constructor() {
    this.account = [];
  }

  deposit(date, amount) {
    const balance = this.bankBalance(amount);
    // creates a new object with all the transaction details
    const transaction = {
      date: date,
      // .toFixed adds two decimal places to the amount
      credit: amount.toFixed(2),
      debit: "",
      balance: balance.toFixed(2)
    };
    // unshift pushes new object as the first in the array
    this.account.unshift(transaction);
  }

  // same logic as deposit except for a negative amount inputted
  withdraw(date, amount) {
    const balance = this.bankBalance(-amount);
    const transaction = {
      date: date,
      credit: "",
      debit: amount.toFixed(2),
      balance: balance.toFixed(2)
    };
    this.account.unshift(transaction);
  }

  // this function is called in the deposit & withdraw methods only.
  // calculates the total balance by adding new amount to previous total balance.
  bankBalance(amount) {
    // checking if any transactions have already been inputted
    if (this.account.length > 0) { 
      const previousBalance = parseInt(this.account[0].balance); // parseInt converts a string to a number
      return previousBalance + amount;
    }
    // if none, return as the first transaction
    return amount;
  }

  // currentBalance used to simply help for tests passing
  currentBalance() {
    if (this.account.length > 0) {
      return this.account[0].balance;
    }
    return 0
  }

  printStatement() {
    console.log(`date || credit || debit || balance`)
    // taking the 'this.account' object's array and printing results for each transaction
    this.account.forEach( transaction => 
      console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
    );
  }
}

// eslint-disable-next-line no-undef
module.exports = BankStatement;
