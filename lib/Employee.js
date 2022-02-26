class Employee {
  constructor(name = "", id, email) {
    // why do those have to be passed as parameters? (otherwise test doesn't pass)
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {}

  getId() {}

  getEmail() {}

  getRole() {}
}

module.exports = Employee;
