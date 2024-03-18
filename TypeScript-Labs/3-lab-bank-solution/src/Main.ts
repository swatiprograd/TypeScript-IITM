class BankAccount {
    private accountNumber: string;
    private accountHolderName: string;
    private balance: number;

    constructor(accountNumber: string, accountHolderName: string) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = 0;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited successfully.`);
        } else {
            console.log("Invalid amount. Deposit amount should be greater than 0.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn successfully.`);
        } else {
            console.log("Insufficient funds or invalid amount for withdrawal.");
        }
    }

    checkBalance(): void {
        console.log(`Account Holder: ${this.accountHolderName}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// Example
const account1 = new BankAccount("1234567890", "Swati Pandey");
account1.deposit(1000);
account1.withdraw(500);
account1.checkBalance();