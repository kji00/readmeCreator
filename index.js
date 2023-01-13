// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fileName = 'README.md'
 
// TODO: Create an array of questions for user input
const questions = [
    // questions:
    {
        // 1. github username:
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        // 2. email address:
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        // 3. project name:
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
    },
    {
        // 4. write a short description of your project
        type: 'input',
        name: 'desciption',
        message: 'Describe your project:'
    },
    {
        // 5. What kind of license should your project have
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have:',
        choices: ['MIT', 'APACHE', 'GPL']
    },
    {
        // 6. What command should be run to install dependencies? (npm i) --> specific way to set a default answer
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies',
        default: 'npm i'
    },
    {
        // 7. What command should be run to run tests? (npm test)
        type: 'input',
        name: 'command',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        // 8. What does the user need to know about using the repo?
        type: 'input',
        name: 'instructions',
        message: 'What does the user need to know about using the repo?'
    },
    {
        // 9. How can others contribute?
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute?'  
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Created README!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        return generateMarkdown(data);
    })
    .then((readMeData) => {writeToFile(fileName, readMeData)})
}

// Function call to initialize app
init();
