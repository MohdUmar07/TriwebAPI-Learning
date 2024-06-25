class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. Balance is now ${this.#balance}.`);
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Withdrawn ${amount}. Balance is now ${this.#balance}.`);
        } else {
            console.log('Insufficient balance.');
        }
    }

    getBalance() {
        console.log(`Current balance is ${this.#balance}.`);
    }
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
account.getBalance();
