const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, ID, e_mail, officeNum) {
        super(name, ID,  e_mail); // accessing parent's properties
        this.officeNum = officeNum;
        this.title = "Manager";
    }

    getofficeNum() {
        return this.officeNum
    };

    getTitle() {
        return this.title
    }
   
};

module.exports = Manager;