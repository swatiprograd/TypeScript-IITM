var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("".concat(amount, " deposited successfully."));
        }
        else {
            console.log("Invalid amount. Deposit amount should be greater than 0.");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("".concat(amount, " withdrawn successfully."));
        }
        else {
            console.log("Insufficient funds or invalid amount for withdrawal.");
        }
    };
    BankAccount.prototype.checkBalance = function () {
        console.log("Account Holder: ".concat(this.accountHolderName));
        console.log("Account Number: ".concat(this.accountNumber));
        console.log("Balance: ".concat(this.balance));
    };
    return BankAccount;
}());
// Example
var account1 = new BankAccount("1234567890", "Swati Pandey");
account1.deposit(1000);
account1.withdraw(500);
account1.checkBalance();
