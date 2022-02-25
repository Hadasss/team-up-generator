const inquirer = require("inquirer");
const htmlTemplate = require("./src/html-template");
const writeHtml = require("./utils/generateHTML");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
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
      message: "Please enter your employee ID",
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
      name: "EmployeesArr",
      message: "Select a type of position to add employee",
      choices: ["Engineer", "Intern"],
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
