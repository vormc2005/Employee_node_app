const inquirer = require("inquirer");
const fs = require("fs");


// Collecting information about employee//

inquirer.
    prompt([

        {
            type:"list",
            message:"Please choose a title",
            name:"title",
            choices: ["Engineer", "Manager", "Intern"]

        },
        {
            type:"input",
            message:"Name",
            name:"Person_name"
        },
        {
            type: "input",
            message: "Please enter an ID",
            name: "ID"

        },
       
        {
            type:"input",
            message:"Please enter your e-mail",
            name:"e-mail"
        },
        
            
        

    ])

// get reponses and filter them 
.then (function(response){
    console.log(response.title)
    switch (response.title){
        //If engineer, ask for git hub address
        case "Engineer":
        inquirer.
        prompt([
            {
            type:"input",
            name: "gitHub",
            message:"What is your gitHub Address?"
            },
        ])

    break;

    case "Manager":
        inquirer.
        prompt([
            {
                type:"type",
                name:"officeNum",
                message:"What is your office number?"
            },
            
        ])
        case "Intern":
            inquirer.prompt([
                {
                    type:"input",
                    name:"school",
                    Message:"What school did you got to?"
                }
            ])
    }
});

    

    

    /**1. Create array/object with emplyees
     * 2. Got through array and attach names data obtained from the inquirer to the right class
     * 3. 
     */