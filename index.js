// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your title of this project?",
  },
  {
    type: "input",
    message: "What was your description?",
    name: "description",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What features does it use?",
    name: "features",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "lesson",
  },
  {
    type: "input",
    message: "What makes your project stand out?",
    name: "unique",
  },
  {
    type: "input",
    message: "How does installation work?",
    name: "install",
  },
  {
    type: "list",
    message: "What license?",
    name: "license",
    choices: ["MIT", "MPL", "IBM", "None"],
  },
  {
    type: "input",
    message: "Has it been Tested? If so, How?",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter the file path for the screenshot",
    name: "screenshot",
  },
  {
    type: "input",
    message: "Enter the file path for the screenshot",
    name: "screenshot",
  },
  {
    type: "input",
    message: "Enter your github username:",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("ReadME", data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const filename = `${response.title.toLowerCase().split(" ").join("")}.md`;
    writeToFile(filename, generateMarkdown(response));
    console.log(response);
  });
}

// Function call to initialize app

init();
