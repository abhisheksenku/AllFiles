class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John','Doe','4-3-1998');
const person2 = new Person('Abhi','Uthukota','21-01-2000');

console.log(person2.getFullName());
console.log(person1);