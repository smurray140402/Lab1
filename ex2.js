// Function that prints the calculated value
function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
// Adds first and second val and converts to string
var sumOfVals = (firstVal + secondVal).toLocaleString();
// Call on addition and pass the string sumOfVals
addition(sumOfVals);
