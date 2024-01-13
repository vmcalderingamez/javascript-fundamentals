//Loops

var names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha"
];

//for

console.log("fori: \n");

for (let i = 0; i <= names.length; i++) {
    console.log(names[i]);    
}

console.log("\nfor of: \n");

for (const name of names) {
    console.log(name);
}

console.log("\nfor each: \n");

names.forEach(name => {
    console.log(name);
});

console.log();

names.forEach(function(name) {
    console.log(name);
});


//while and do while

var index = 0;

console.log("\nwhile: \n");

while (index < names.length) {
    console.log(names[index]);
    index++;
}

console.log("\ndo while: \n");

index = 0;

do {
    console.log(names[index]);
    index++;    
} while (index < names.length);