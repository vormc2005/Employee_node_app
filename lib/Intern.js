const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID,  e_mail); // accessing parent's properties
        this.school = school;
        this.title = "Intern";
    }

    getSchool() {
        return this.school
    };
    getTitle() {
        return this.title
    }
}

module.exports = Intern;