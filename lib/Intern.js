const Employee = require("./Employee");

class Intern extends Employee {
  constructor() {
    this.school = school;
  }

  getSchool() {}

  getRole() {
    return Intern; // QUESTION check syntax!
  }
}

module.exports = Intern;
