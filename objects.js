//Object Destructuring

const person = {
    firstname: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000,0,30).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    },
    toString: function() {
        return `Name: ${this.firstname} Age: ${this.age}`
    },
    deleteMe: true
};

//const firstName = person.firstname;
// const age = person.age;
// const balance = person.balance;

const {
    firstname,
    firstname: name, //this is for renaming a propertie we access 
    age,
    balance,
    address: {city} //this is the notation when access to an object
} = person;

console.log(firstname);
console.log(age);
console.log(balance);
console.log(city);