
var person = {
    firstname: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000,0,30).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
};

console.log(person);
console.log();
console.log(person.firstname);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));