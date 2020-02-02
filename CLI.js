const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Collecting information about employee//
function getEmployeeInfo(){

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
            name:"name"
        },
        {
            type: "input",
            message: "Please enter an ID",
            name: "ID"

        },
       
        {
            type:"input",
            message:"Please enter your e-mail",
            name:"e_mail"
        },        

    ])

// get reponses and filter them 
.then (function(response){
    console.log(response.title);
    console.log(response.name);
    console.log(response.ID);
    console.log(response.e_mail);

    // var employee = new employee(response.title, response.name, response.ID, response.e_mail);
    // console.log(employee);


    switch (response.title){
 //If engineer, ask for git hub address
        case "Engineer":
        inquirer.
        prompt([
            {
            type:"input",
            name: "gitHub",
            message:"What is your gitHub Address?"
            }
        ]).then(response => {//Rsponse from inquirer
        
        console.log(response.gitHub);

        // const engineer = new engineer(response.title, response.name, response.ID, response.e_mail, response.gitHub);
        // console.log(engineer[i])
            // building a object with information from inquirer

            const EngineerObj = [
                `Team`,
                "_"/repeat(60),
                `Title: ${engineer.getRole()}`,


            ]
            console.log(EngineerObj)
        })

    break;

    case "Manager":
        inquirer.
        prompt([
            {
                type:"input",
                name:"officeNum",
                message:"What is your office number?"
            },
            
        ]);

        break;

        case "Intern":
            inquirer.prompt([
                {
                    type:"input",
                    name:"school",
                    message:"What school did you got to?"
                }
            ])
    }
});

}

getEmployeeInfo();
    

    


     /* 2. Got through array and attach names data obtained from the inquirer to the right class

     3. Create classes
     
     * 3. 
     */