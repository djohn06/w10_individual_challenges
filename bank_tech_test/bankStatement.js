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
    console.log(this.account);
  }

  bankBalance(amount) {
    if (this.account.length > 0) { 
      const previousBalance = parseInt(this.account[0].balance); // parseInt converts a string to a number
      return previousBalance + amount;
    }
    return amount;
  }

  currentBalance() {
    if (this.account.length > 0) {
      return this.account[0].balance;
    }
    return 0
  }
}

// eslint-disable-next-line no-undef
module.exports = BankStatement;