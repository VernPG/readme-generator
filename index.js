// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("utils");

// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
  {
    type: "imput",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe this project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "install",
  },
  {
    type: "input",
    message: "What is the intended use of this project?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license was selected for this project?",
    choices: [
      "Apache",
      "GNU",
      "MIT",
      "BSD",
      "Boost",
      "Creative",
      "Eclipse",
      "Mozilla",
      "Unilicense",
      "Other",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "Who are the contributors to this project?",
    name: "contributors",
  },
  {
    type: "input",
    message:
      "Issues? Please add an issue to receive a response or contact me via the below email.",
    name: "issues",
  },
  {
    type: "input",
    message:
      "Add a screenshot of completed project ![alt text](assets/images/screenshot.png)",
    name: "screenshot",
  },

  {
    type: "input",
    message: "Enter GitHub username.",
    name: "name",
  },
  {
    type: "input",
    message: "Enter your email address.",
    name: "email",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Check out your new readme file!");
    }
  });

  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then(function (data) {
      writeToFile("./README.md", generateMarkdown(data));
      console, log(data);
    });
  }
}

// Function call to initialize app
init();

