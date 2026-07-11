class BankAccount {
  userId: number;
  userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  public deposit(amount: number): void {
    this.userBalance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= this.userBalance) {
      this.userBalance -= amount;
    }
  }

  public getBalance(): number {
    return this.userBalance;
  }
}

class StudentAccount extends BankAccount {
test() {
    this.userBalance;
}
}
