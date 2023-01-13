export class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
    getFullName() {
        return `${this.name} ${this.surname}`
    }
}