//Functions

function addNumbers() {
    var addition = 5 + 7;
    console.log(addition);    
}


function addSpecifyedNumbers(firstNumber, secondNumber) {
    var addition = firstNumber + secondNumber;
    console.log(addition);    
}


function addSpecifyedNumbersAsResult(firstNumber, secondNumber) {
    var addition = firstNumber + secondNumber;
    return addition;    
}

addNumbers();

addSpecifyedNumbers(10,11);

var result = addSpecifyedNumbersAsResult(30, 5);

console.log(result);