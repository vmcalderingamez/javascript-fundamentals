
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

person["lastName"] = "Ahmed";

delete person.deleteMe;

console.log(person.toString()) 
console.log(person); 

for (const p in person) {
    console.log(p);
    console.log(person[p]);
}

console.log(Object.keys(person));
console.log(Object.values(person));
