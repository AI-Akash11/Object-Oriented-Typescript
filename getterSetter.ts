 class BankAcnt {
    readonly userId: number;
    userName: string;
    protected userBalance: number;

    constructor(UserId: number, UserName: string, UserBalance: number) {
        this.userId = UserId;
        this.userName = UserName;
        this.userBalance = UserBalance;
    }

    // addBalance (balance : number) {
    //     this.userBalance = this.userBalance + balance;
    // }

    set addBalance (amount : number) {
        this.userBalance = this.userBalance + amount;
    }

    // getBalance() {
    //     return this.userBalance;
    // }

    get getBalance() {
        return this.userBalance;
    }

}

class StudentAcnt extends BankAcnt {
    test() {
        console.log(this.userId);
    }
}

const myAcnt = new BankAcnt(12, "akash", 10000);

myAcnt.addBalance = 5000;

console.log(myAcnt);

console.log(myAcnt.getBalance);