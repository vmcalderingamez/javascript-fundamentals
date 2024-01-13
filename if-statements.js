//If Statement

console.log("if: \n");

var condition = 1 < 0;

if (condition) {
    console.log("Runs...");
} else {
    console.log("Else condition ran...");
}


var gender = "M";

if (gender = "M") {
    console.log("Male");
} else if (gender = "F") {
    console.log("Femele");    
} else {
    console.log("can't exist");
}


// Ternary If Statement

console.log("\nTernary if: \n");

var number = 6;
var result = (number % 2 == 0) ? "Even" : "Odd";
console.log(result);

/* if (number % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");    
} */