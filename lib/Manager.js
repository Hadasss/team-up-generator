const Employee = require("./Employee");

class Manager extends Employee {
  constructor() {
    this.officeNumber = officeNumber;
  }

  getRole() {
    return Manager; // QUESTION check syntax!
  }
}

module.exports = Manager;
