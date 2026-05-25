// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs["USD"];
}

const fromDollarToYen = (dollars) => {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

const fromYenToPound = (yens) => {
    return (yens / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };