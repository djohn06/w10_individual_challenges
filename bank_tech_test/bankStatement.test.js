/* eslint-disable no-undef */
const BankStatement = require("./bankStatement");

describe("BankStatement", () => {
  it("returns bank balance as 0", () => {
    const bankStatement = new BankStatement;
    expect(bankStatement.currentBalance()).toBe(0);
  })

  it("recieves a £500 deposit", () => {
    const bankStatement = new BankStatement;
    bankStatement.deposit("01/01/2023", 500);
    expect(bankStatement.currentBalance()).toEqual(500);
  })

  it("recieves another £300 deposit", () => {
    const bankStatement = new BankStatement;
    bankStatement.deposit("01/01/2023", 500);
    bankStatement.deposit("03/01/2023", 300);
    expect(bankStatement.currentBalance()).toEqual(800);
  })
})

// bankBalance is a function that is specifically used for
// the deposit function. Change tests and/or use a printBalance function
// to pull the current balance for the tests. Instead of what I'm doing now.