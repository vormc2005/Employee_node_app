const cli = require("./CLI");



//creating employee class//
class employee {
    constructor(ID, name, email){
    this.name = name;
    this.ID = ID;
    this.email = email
    }
}
// Adding class engineer
class engineer extends employee{
    constructor (github){
        super(ID, "engineer")
        this.github = github;
       function getGithub() {

       }
    }
}

//Creating Intern class
class intern extends employee{
    constructor (school){
        super (ID, "intern")
    this.school = school;
    getSchool=() =>{

         }
    };

}
/**Need to work on output function for each of the classes */

//Creating manager class
class manager extends employee{
    constructor(officenum){
        super(ID, "manager")
        this.officenum=officenum;
        function getOfficenum(){

        }
    }
}

/** */