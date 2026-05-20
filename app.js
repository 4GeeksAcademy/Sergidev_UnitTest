// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (valueInEuro) => {
return valueInEuro * 1.07
}

const fromDollarToEuro = (valueInDollar) => {
return valueInDollar / 1.07
}

const fromYensToEuros = (valueInYen) => {
return valueInYen / 156.5
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromYensToEuros, fromDollarToEuro };