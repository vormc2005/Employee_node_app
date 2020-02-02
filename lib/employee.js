// building parent class 


class Employee {
    constructor(name, ID, e_mail) {
        this.name = name;
        this.ID = ID;
        this.e_mail = e_mail;
        this.title = "employee";
    }

    getName() {
        return this.name
    }

    getId() {
        return this.ID
    }

    getEmail() {
        return this.e_mail
    }

    getTitle() {
        return this.title
    }
}

module.exports = Employee;