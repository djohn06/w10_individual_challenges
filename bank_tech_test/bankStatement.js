class BankStatement {
  constructor() {
    this.account = [];
  }

  deposit(date, amount) {
    const balance = this.bankBalance(amount);
    const transaction = {
      date: date,
      credit: amount,
      debit: "",
      balance: balance
    };
    this.account.unshift(transaction); // unshift enters new object first in the array
    console.log(this.account); // DELETE ONCE COMPLETE
  }

  withdraw(date, amount) {
    const balance = this.bankBalance(-amount);
    const transaction = {
      date: date,
      credit: "",
      debit: amount,
      balance: balance
    };
    this.account.unshift(transaction);
    console.log(this.account); // DELETE ONCE COMPLETE
  }

  // this function is called in the deposit & withdraw methods
  bankBalance(amount) {
    if (this.account.length > 0) { 
      const previousBalance = parseInt(this.account[0].balance); // parseInt converts a string to a number
      return previousBalance + amount;
    }
    return amount;
  }

  // currentBalance used to help for tests passing
  currentBalance() {
    if (this.account.length > 0) {
      return this.account[0].balance;
    }
    return 0
  }

  printStatement() {
    console.log(`date || credit || debit || balance`)
    this.account.forEach( transaction => 
      console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
    );
  }
}

// eslint-disable-next-line no-undef
module.exports = BankStatement;

// input into node:
// const BankStatement = require('./BankStatement');
const bankStatement = new BankStatement;
bankStatement.deposit("10/01/2023", 1000);
bankStatement.deposit("13/01/2023", 2000);
bankStatement.withdraw("14/01/2023", 500);
bankStatement.printStatement();