//Spread Operator on Objects

const jamila = {
    firstname: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000,0,30).toJSON(),    
    toString: function() {
        return `Name: ${this.firstname} Age: ${this.age}`
    },
    deleteMe: true
};

const address = {
    city: "London",
    postCode: "SW9"
};

/* const person = {
    firstname: jamila.firstname,
    address: {
        city: address.city,
        postCode: address.postCode
    }
} */

const person = {
    ...jamila,
    address: {...address}
}

console.log(person);