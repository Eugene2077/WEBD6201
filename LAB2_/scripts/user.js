// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 20 Feb 2023 



/*
* Class to create new user
 */
export class User {

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    /**
     * @property {function} displayUser Prints users details: user name, username, email, and password
     * @returns {string}
     */
    displayUser() {
         return `
         First Name: ${this.firstName}
         Last Name: ${this.lastName}
         Email: ${this.email}
         Password: ${this.password}`
    }
}