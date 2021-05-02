// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const fs =require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"Projectname",
        message:"Enter Project Name?"
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
    ,
    {
        type:"input",
        name:"Description",
        message:"Project Description :"
    }
    ,
    {
        type:"input",
        name:"Installation",
        message:"Enter installation details:"
    }
    ,
    {
        type:"input",
        name:"Usage",
        message:"Enter usage detail:"
    }
    ,
    {
        type:"input",
        name:"Contribution",
        message:" Enter contributors names:"
    }
    ,
    {
        type:"input",
        name:"Tests",
        message:" Enter testing requirements:"
    }
    ,
    {
        type:"input",
        name:"email",
        message:"Enter email:"
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
# Project: ${userresponse.Projectname}
### Developers Profile :https://github.com/${userresponse.github}
## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#testing)
* [Contact](#Contact)
## Description
${userresponse.Description}

## License
![Github License](https://img.shields.io/badge/license-${userresponse.license}-blue.svg)

## Installation
${userresponse.Installation}
## Usage
${userresponse.Usage}
## Contribution
${userresponse.Contribution}
## Tests
${userresponse.Tests}

## Contact
If you have any question, feel free to contact me at
${userresponse.email}

`
    console.log(fileContent)
    fs.writeFileSync("README.md",fileContent,function(err){
        if (err) throw err;
        console.log("File generation complete")
    })
   })
}

// Function call to initialize app
init();
