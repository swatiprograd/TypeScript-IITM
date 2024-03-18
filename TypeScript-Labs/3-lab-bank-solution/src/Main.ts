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

    }

    withdraw(amount: number): void {

    }

    checkBalance(): void {

    }
}

// Example
const account1 = new BankAccount("1234567890", "Swati Pandey");
account1.deposit(1000);
account1.withdraw(500);
account1.checkBalance();