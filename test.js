// Import the functions from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("1 euro ==> 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("10 dollars ==> 1490.3 yens", function() {
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
})

test("1,000 yens ==> 7.72 pounds", function() {
    expect(fromYenToPound(1000)).toBe(5.559105431309905);
})