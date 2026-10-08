class Employee {
  #baseSalary;

  constructor(name, baseSalary) {
    this.name = name;
    this.#baseSalary = baseSalary;
  }

  getBaseSalary() {
    return this.#baseSalary;
  }

  calculatePay() {
    return this.#baseSalary;
  }
}

class Manager extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name, baseSalary);
    this.bonus = bonus;
  }

  calculatePay() {
    return this.getBaseSalary() + this.bonus;
  }
}

const employee1 = new Employee("Alice", 4000);

const employee2 = new Manager("Bob", 5000, 1500);

const team = [employee1, employee2];

team.forEach((member) => {
  console.log(`${member.name}'s monthly pay: $${member.calculatePay()}`);
});
