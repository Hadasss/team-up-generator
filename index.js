const inquirer = require("inquirer");
const htmlTemplate = require("./src/html-template");
const writeHtml = require("./utils/generateHTML");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name? (Required)",
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
    {
      type: "checkbox",
      name: "employeeType",
      message: "Select a type of position to add a new employee",
      choices: ["Engineer", "Intern"],
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
  ]);
};

promptUser()
  .then((answers) => {
    return answers;
  })
  .then((answers) => htmlTemplate(answers))
  .then((fileContent) => writeHtml(fileContent))
  .catch((err) => {
    console.log(err);
  });

module.exports = promptUser;
