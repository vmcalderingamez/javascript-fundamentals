//Let

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

console.log(i);  // this will print an error as spected


//const

/* let brand = "Amigoscode"
brand = 10;
brand = function() {
    return "Hello";
}

console.log(brand); */


const brand = "Amigoscode";
const brandObject = {};
brandObject["brand"] = brand;
delete brandObject.brand;

console.log(brand);
console.log(brandObject);
