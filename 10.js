class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Insufficient balance');
        }
    }
}
function transfer(fromAccount, toAccount, amount) {
    fromAccount.withdraw(amount);
    toAccount.deposit(amount);
}
const acc1 = new BankAccount('Alice', 500);
const acc2 = new BankAccount('Bob', 300);
transfer(acc1, acc2, 100);
console.log(acc1.balance, acc2.balance);
