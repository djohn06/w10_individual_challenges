# Bank Tech Test

This is the first question of the individual challenges from Week 10 of the Makers course.

## Question

- **Given** a client makes a deposit of 1000 on 10-01-2023,
- **and** a deposit of 2000 on 13-01-2023,
- **and** a withdrawal of 500 on 14-01-2023.
- **When** she prints her bank statement,
- **then** she would see:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Technologies used to run program

We use `node` for our program, in order to install `node`, run the following command in the console:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Then reload:
```
source ~/.zshrc
```
Now install Node using nwm:
```
$ nvm install node
$ nvm use node
```
In order to test the program, use NPM and Jest. [Read the following in order to install packages on your machine.](https://github.com/makersacademy/javascript-fundamentals/blob/main/pills/setting_up_project.md)

## Run the program
If Node.js is install on your machine, run `node` in the file's directory terminal. Once you're in the REPL, copy and paste the following:
```
const BankStatement = require('./BankStatement');
const bankStatement = new BankStatement;
bankStatement.deposit("10/01/2023", 1000);
bankStatement.deposit("13/01/2023", 2000);
bankStatement.withdraw("14/01/2023", 500);
bankStatement.printStatement();
```
The above will print the bank statement to the console, with each transaction included. Exactly similar to what was required above:
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
