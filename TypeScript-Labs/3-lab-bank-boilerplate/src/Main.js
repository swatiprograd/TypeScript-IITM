var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
    };
    BankAccount.prototype.withdraw = function (amount) {
    };
    BankAccount.prototype.checkBalance = function () {
    };
    return BankAccount;
}());
// Example
var account1 = new BankAccount("1234567890", "Swati Pandey");
account1.deposit(1000);
account1.withdraw(500);
account1.checkBalance();
