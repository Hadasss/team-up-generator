const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const htmlTemplate = require("./src/html-template");
const writeHtml = require("./utils/generateHTML");

const employees = [];

const returnEmployeesArr = function () {
  // console.log(employees);
  // const generatedHtml = htmlTemplate(employees);
  // writeHtml(generatedHtml);
};

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please type your name (Required)",
        validate: (answers) => {
          if (answers) {
            return true;
          } else {
            console.log("Hello manager! Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: (answers) =>
          `Hello ${answers.managerName}! Please enter your employee ID`,
      },
      {
        type: "input",
        name: "email",
        message: "Please enter employee email",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number",
      },
    ])
    .then((manager) => {
      const newMgr = new Manager(
        manager.managerName,
        manager.id,
        manager.email,
        manager.officeNumber
      );
      employees.push(newMgr);
      promptEmployee();
      return employees;
    });
};

const promptEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "employeeType",
        message: "Select a type of position to add a new employee",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please type employee name (Required)",
        validate: (answers) => {
          if (answers) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter employee email",
      },
      {
        type: "input",
        name: "github",
        message: "Type GitHub username",
        when: (answers) => {
          if (answers.employeeType == "Engineer") {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Type the name of your current school",
        when: (answers) => {
          if (answers.employeeType == "Intern") {
            return true;
          }
        },
      },
      {
        type: "confirm",
        name: "addEmployee",
        message: "Add another employee?",
      },
    ])
    .then((response) => {
      if (response.employeeType == "Engineer") {
        const newEng = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
        employees.push(newEng);
      } else {
        const newInt = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        employees.push(newInt);
      }

      if (response.addEmployee) {
        return promptEmployee();
      }
      // return returnEmployeesArr();
      // console.log(employees);
      const template = htmlTemplate(employees);
      writeHtml(template);
    });
};

promptUser();
