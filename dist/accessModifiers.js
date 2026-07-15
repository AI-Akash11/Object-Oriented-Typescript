"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    userBalance;
    constructor(UserId, UserName, UserBalance) {
        this.userId = UserId;
        this.userName = UserName;
        this.userBalance = UserBalance;
    }
    addBalance(balance) {
        this.userBalance = this.userBalance + balance;
    }
}
class StudentAccount extends BankAccount {
    test() {
        console.log(this.userId);
    }
}
const myAccount = new BankAccount(12, "akash", 10000);
//# sourceMappingURL=accessModifiers.js.map