// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: "installation",
  },
  {
    type: "input",
    message: "What is the intended use of this project",
    name: "usage",
  },
  {
    type: "input",
    message: "Who are the contributors to this project?",
    name: "contributors",
  },
  {
    type: "input",
    message: "How do you test the project?",
    name: "test",
  },
  {
    type:"list",
    message:"What license was selected for this project?",
    choices:[
        "Apache",
        "GNU",
        "MIT",
        "BSD Simplified",
        "BSD New",
        "Boost",
        "Creative",
        "Eclipse",
        "Mozilla",
        "Unilicense",
        "Other"
    ],
    name: "license"
    },
    //how to I add a badge to appear?
    {
        type:"input",
        message:"Enter GitHub username.",
        name:"name"
    },
    {
        type:"input",
        message:'Enter your email address.',
        name: "email"
    }
])
// .then(responses => {
//     console.log(responses)
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
