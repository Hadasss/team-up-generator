const inquirer = require("inquirer");
const htmlTemplate = require("./src/html-template");
const writeHtml = require("./utils/generateHTML");

const employees = [];

const promptUser = () => {
  return inquirer.prompt([
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
        `Hello ${answers.name}! Please enter your employee ID`,
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
  ]);
  // .then(() => {
  //   employees.push(answers);
  // });
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
      employees.push(response);
      if (response.addEmployee) {
        promptEmployee();
      }
    });
};

promptUser()
  .then((answers) => {
    return answers;
  })
  .then(() => {
    promptEmployee()
      .then((response) => {
        return response;
      })
      .then((answers, response) => htmlTemplate(answers, response));
  })
  .then((fileContent) => writeHtml(fileContent))
  .catch((err) => {
    console.log(err);
  });

// .then((response) => {
//   return response;
// })
// .then((answers, response) => htmlTemplate(answers, response))
// .then((fileContent) => writeHtml(fileContent))
// .catch((err) => {
//   console.log(err);
// });

// module.exports = promptUser;
