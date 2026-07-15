"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    deposit(amount) {
        this.userBalance += amount;
    }
    withdraw(amount) {
        if (amount <= this.userBalance) {
            this.userBalance -= amount;
        }
    }
    getBalance() {
        return this.userBalance;
    }
}
class StudentAccount extends BankAccount {
    test() {
        this.userBalance;
    }
}
//# sourceMappingURL=encapsulation.js.map