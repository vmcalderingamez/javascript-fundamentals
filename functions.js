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

// Best practice

const getBrand = function (brand) {
    return {
        brand: brand,
        website: `www.${brand}.com`
    }
}

const brand = getBrand("Nike");
console.log(JSON.stringify(brand,null,1));


// now with arrows

const getBrandv2 = brandv2 => ({
        brandv2: brandv2,
        website: `www.${brandv2}.com`
    }
)

const add  = (a,b) => a + b;

const calculate = (a,b,sign) => {
    switch (sign) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break
        default:
            //throw an error
            break;
    }
}

// function default parameters

const getBrandv3 = (brandv3 = "Hello") => ({
    brandv3: brandv3,
    website: `www.${brandv3}.com`
}
)
