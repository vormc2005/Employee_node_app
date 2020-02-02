const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, ID, e_mail, gitHub) {
        super(name, ID,  e_mail); // accessing parent's properties
        this.gitHub = gitHub;
        this.title = "Engineer";
    }

    getGithub() {
        return this.gitHub
    }
    getTitle() {
        return this.title
    }
}

module.exports = Engineer;