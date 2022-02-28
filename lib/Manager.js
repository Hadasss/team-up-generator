const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
