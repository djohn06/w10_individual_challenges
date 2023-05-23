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

  it("recieves a £400 withdrawal", () => {
    const bankStatement = new BankStatement;
    bankStatement.deposit("01/01/2023", 500);
    bankStatement.deposit("03/01/2023", 300);
    bankStatement.withdraw("01/01/2023", 400);
    expect(bankStatement.currentBalance()).toEqual(400);
  })

  it("recieves another £150 withdrawal", () => {
    const bankStatement = new BankStatement;
    bankStatement.deposit("01/01/2023", 500);
    bankStatement.deposit("03/01/2023", 300);
    bankStatement.withdraw("01/01/2023", 400);
    bankStatement.withdraw("01/01/2023", 150);
    expect(bankStatement.currentBalance()).toEqual(250);
  })
})
