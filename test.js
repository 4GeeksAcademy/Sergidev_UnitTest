// Import the function sum from the app.js file
const { sum, fromDollarToEuro, fromYensToEuros } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("1 euro ==> 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars.toFixed(2)).toBe("3.75");
})

test("1 dollar ==> 146.26 yens", function() {
    const euros = fromDollarToEuro(1);
    const expected = euros * 156.5; 
    expect(expected.toFixed(2)).toBe("146.26");
})

test("1,000 yens ==> 5.56 pounds", function() {
    const euros = fromYensToEuros(1000);
    const expected = euros * 0.87; 
    expect(expected.toFixed(2)).toBe("5.56");
})
