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

});

    getRole = () =>{

    }

    /**1. Create array/object with emplyees
     * 2. Got through array and attach names data obtained from the inquirer to the right class
     * 3. 
     */