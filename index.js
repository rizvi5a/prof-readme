// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const fs =require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"projectname",
        message:"Enter Project name?"
    },
    {
        type: "list",
        name:"license",
        choices:["MIT","ISC","APACHE 2.0","None"],
        message:"Choose License for your project"
    },
    {
        type:"input",
        name:"github",
        message:"Enter Github username :"
    }
];

// TODO: Create a function to write README file
function writeToFile(file, data) {}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(function(userresponse){
       console.log(userresponse)
    var fileContent = `
# Project: ${userresponse.projectname}
### Developers Profile :https://github.com/${userresponse.github}
## Table of Contents
*[Description](#description)
*[Installation](#installation)
*[License](#license)
*
## Description
${userresponse.description}
## License
![Github License](https://img.shields.io/badge/license-${userresponse.license}-blue.svg)

`
    console.log(fileContent)
   })
}

// Function call to initialize app
init();
