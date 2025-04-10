class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  credit(amount) {
    this.balance += amount;
  }

  describe() {
    return `Owner: ${this.name}, Balance: $${this.balance}`;
  }
}

module.exports = Account;
