/* eslint-disable no-undef */
const BankStatement = require("./bankStatement");

describe("BankStatement", () => {
  it("returns bank balance as 0", () => {
    const bankStatement = new BankStatement
    expect(bankStatement.bankBalance()).toEqual(0);
  })
})