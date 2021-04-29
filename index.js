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
    ,
    {
        type:"input",
        name:"Description",
        message:"Project Description :"
    }
    ,
    {
        type:"input",
        name:"Usage",
        message:"Enter usage detaild :"
    }
    ,
    {
        type:"input",
        name:"Testing",
        message:"Enter testing requiremnets:"
    }
    ,
    {
        type:"input",
        name:"email",
        message:"Enter email:"
    }
    ,
{
        type:"input",
        name:"Installation",
        message:"Installation Details:"
    }
    ,
    {
        type:"input",
        name:"Contribution",
        message:"Contributors to the project:"
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
* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [testing](#testing)
* [Contact](#Contact)
## Description
${userresponse.description}

## License
![Github License](https://img.shields.io/badge/license-${userresponse.license}-blue.svg)
## Contributos
${userresponse.consolecontributors}
## Installation
${userresponse.installation}
## Usage
${userresponse.usage}
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
