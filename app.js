const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



/**Crate arrays that store all of the employees information */

let internArr = [];
let engineerArr = [];
let managerArr = [];


const startFunc = () => {

    inquirer
        .prompt([
            {
                type: "confirm",
                name: "HRmanager",
                message: "Are you team HRmanager?"
            }

        ]).then(response => {
            if (response.HRmanager === true) {

                addemployee();

            } else {
                console.log("You do not have access to add employees!")
            }
            return;
        })
};
startFunc();

const addemployee = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Who would you like to add?",
                name: "title",
                choices: ["Engineer", "Manager", "Intern", "NoOne"]


            }
        ]).then(response => {
            if (response.title === "Engineer") {
                addEngineer()
            } else if (response.title === "Manager") {
                addManager();
            } else if (response.title === "Intern") {
                addIntern();
            } else {
                console.log("NoOne added at this time")
                return
            };
        });

};
/**Creating new function to add engineer to an array */
const addEngineer = () => {
    inquirer.
        prompt([
            {
                type: "input",
                name: "name",
                message: "What is your new Engineers name?"
            },
            {
                type: "input",
                name: "ID",
                meassage: "Please assign ID to your new engineer"
            },
            {
                type: "input",
                name: "e_mail",
                message: "Please type you new engineers' e-mail"
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is your new engineers' gitHub id?"
            }
        ]).then(answer => {
            /**console logging answers */
            // console.log(answer.name);
            // console.log(answer.ID);
            // console.log(answer.e_mail);
            // console.log(answer.gitHub)

            // Create a new object in the engineer array

            let engineer = new Engineer(
                answer.name,
                answer.ID,
                answer.e_mail,
                answer.gitHub
            );
            //Push new engineer to an array
            engineerArr.push(engineer)
            console.log(engineerArr)
            const engineerText = [
                `Team`,
                "-".repeat(60),
                `Title:${engineer.getTitle()}`,
                `Name:${engineer.getName()}`,
                `ID:${engineer.getId()}`,
                `E-mail:${engineer.getEmail()}`,
                `GitHub ID:${engineer.getGithub()}`,
                "-".repeat(60),
                ].join 
                ("\n");

                fs.appendFile("log.txt.", engineerText, err =>{
                    if(err)
                    throw err;
                });
            addNext();


        });

};
//Prompt if you want to add more employees

const addNext = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "AddMore",
            message: "Would you like to add more employees?"

        }
    ])
        .then(response => {
            if (response.AddMore === true) {
                addemployee()
            } else {
                return
            };
        })
        ;

};
//Adding intern
const addIntern = () => {
    inquirer.
        prompt([
            {
                type: "input",
                name: "name",
                message: "What is your new Interns' name?"
            },
            {
                type: "input",
                name: "ID",
                meassage: "Please assign ID to your new Intern"
            },
            {
                type: "input",
                name: "e_mail",
                message: "Please type you new Interns' e-mail"
            },
            {
                type: "input",
                name: "school",
                message: "What school did your Intern finish?"
            }
        ]).then(answer => {

            /**console logging answers */
            // console.log(answer.name);
            // console.log(answer.ID);
            // console.log(answer.e_mail);
            // console.log(answer.school)

            // Create a new object in the engineer array

            let intern = new Intern(
                answer.name,
                answer.ID,
                answer.e_mail,
                answer.school
            );
            //Push new engineer to an array
            internArr.push(intern)
            console.log(internArr)
            const internText = [
                `Team`,
                "-".repeat(60),
                `Title:${intern.getTitle()}`,
                `Name:${intern.getName()}`,
                `ID:${intern.getId()}`,
                `E-mail:${intern.getEmail()}`,
                `School:${intern.getSchool()}`,
                "-".repeat(60),
                ].join 
                ("\n");

                fs.appendFile("log.txt.", internText, err =>{
                    if(err)
                    throw err;
                });

            addNext();


        });

};


//Adding a manager
const addManager = () => {
    inquirer.
        prompt([
            {
                type: "input",
                name: "name",
                message: "What is your new Interns' name?"
            },
            {
                type: "input",
                name: "ID",
                meassage: "Please assign ID to your new Intern"
            },
            {
                type: "input",
                name: "e_mail",
                message: "Please type you new Interns' e-mail"
            },
            {
                type: "input",
                name: "officeNum",
                message: "What is your manager office number?"
            }
        ]).then(answer => {

            /**console logging answers */


            // console.log(answer.name);
            // console.log(answer.ID);
            // console.log(answer.e_mail);
            // console.log(answer.officeNum)

            // Create a new object in the engineer array

            let manager = new Manager(
                answer.name,
                answer.ID,
                answer.e_mail,
                answer.officeNum
            );
            //Push new manager to an array
            managerArr.push(manager)
            console.log(managerArr)
            const managerText = [
                `Team`,
                "-".repeat(60),
                `Title:${manager.getTitle()}`,
                `Name:${manager.getName()}`,
                `ID:${manager.getId()}`,
                `E-mail:${manager.getEmail()}`,
                `Office number:${manager.getofficeNum()}`,
                "-".repeat(60),
                ].join 
                ("\n");

                fs.appendFile("log.txt.", managerText, err =>{
                    if(err)
                    throw err;
                });


            addNext();


        });

};
/**End of code */