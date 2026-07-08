class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance: number;

    constructor(UserId: number, UserName: string, UserBalance: number) {
        this.userId = UserId;
        this.userName = UserName;
        this.userBalance = UserBalance;
    }

    addBalance (balance : number) {
        this.userBalance = this.userBalance + balance;
    }

}

class StudentAccount extends BankAccount {
    test() {
        console.log(this.userId);
    }
}

const myAccount = new BankAccount(12, "akash", 10000);

