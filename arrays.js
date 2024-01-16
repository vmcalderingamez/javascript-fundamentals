//Arrays

var names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha"
];

console.log(names);
console.log("Index 0 - " +names[0]);
console.log("Index 1 - " +names[1]);
console.log("Index 2 - " +names[2]);
console.log("Index 3 - " +names[3]);
console.log("Index 4 - " +names[4]);
console.log("Size = " + names.length);


// advanced

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n));

console.log();
console.log(numbers[3]);
numbers[3] = 44;
console.log(numbers[3]);
console.log();

numbers.push(60);
console.log(numbers);

const IndexOfFive = numbers.indexOf(5);
numbers.splice(IndexOfFive,1);
console.log(numbers);

const numbersTimesTwo = numbers.map(n => n * 2);
console.log(numbersTimesTwo);


// Arrays destructuring

const otherNames = [
    "James",
    "Mariam",
    "Jamal",
    "Aisha",
    "Alex"
]
// const james = names[0];
// const mariam = names[1];
// const jamal = names[3];

const [james, mariam, jamal, ...rest] = otherNames;

console.log();
console.log(james);
console.log(mariam);
console.log(jamal);
console.log(rest);


